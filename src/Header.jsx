import React, { useEffect } from 'react';
import gsap from 'gsap'; 
import './styles/Header.css';

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SiddharthaTrivedi___UpdatedResume(2024).pdf';  // Ensure the file is in the public folder
    link.download = 'SiddharthaTrivedi_UpdatedResume_2024.pdf';  // Set the file name for download
    link.click();  // Programmatically click the link to trigger download
  };

  useEffect(() => {
    const $ = (s, o = document) => o.querySelector(s);
    const $$ = (s, o = document) => o.querySelectorAll(s);

    $$('.button').forEach(button => {
      let icon = $('.icon', button);
      let arrow = $('.icon > svg', button);
      let line = $('.icon div svg', button);
      let svgPath = new Proxy(
        { y: null },
        {
          set(target, key, value) {
            target[key] = value;
            if (target.y !== null) {
              line.innerHTML = getPath(target.y, 0.25, null);
            }
            return true;
          },
          get(target, key) {
            return target[key];
          }
        }
      );

      svgPath.y = 12;

      button.addEventListener('click', (e) => {
        if (!button.classList.contains('loading')) {
          button.classList.add('loading');

          gsap.timeline({ repeat: 2 })
            .to(svgPath, { y: 17, duration: 0.17, delay: 0.03 })
            .to(svgPath, { y: 12, duration: 0.3, ease: "elastic.out(1, 0.35)" });

          gsap.timeline({
            repeat: 2,
            repeatDelay: 0.1,
            onComplete() {
              gsap.to(arrow, { '--y': -17.5, duration: 0.4 });
              setTimeout(() => button.classList.add('complete'), 200);
            }
          })
            .to(arrow, { '--y': 9, duration: 0.2 })
            .to(arrow, { '--y': -9, duration: 0.2 });

          gsap.timeline()
            .to(icon, { y: 4, duration: 0.2 })
            .to(icon, { y: 8, duration: 0.2, delay: 0.2 })
            .to(icon, { y: 12, duration: 0.2, delay: 0.2 })
            .to(icon, { y: 18, duration: 0.2, delay: 0.2 });
        }
        e.preventDefault();
      });
    });

    function getPoint(point, i, a, smoothing) {
      let cp = (current, previous, next, reverse) => {
        let p = previous || current;
        let n = next || current;
        let o = {
          length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
          angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        };
        let angle = o.angle + (reverse ? Math.PI : 0);
        let length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      };
      let cps = cp(a[i - 1], a[i - 2], point, false);
      let cpe = cp(point, a[i - 1], a[i + 1], true);
      return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    }

    function getPath(update, smoothing, pointsNew) {
      let points = pointsNew ? pointsNew : [[2, 12], [12, update], [22, 12]];
      let d = points.reduce((acc, point, i, a) => {
        return i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`;
      }, '');
      return `<path d="${d}" />`;
    }

  }, []); // Empty dependency array to ensure this runs once on component mount

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" id="menu-toggle" />
          <ul className="menu-items">
            <li><a href="/">Home</a></li>
            <li><a href="/AboutMe">About Me</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a href="#">Get In Touch</a></li>
          </ul>
          <button className="button" onClick={handleDownload}>
            <div className="icon">
              <svg viewBox="0 0 14 15">
                <line x1="5" y1="13" x2="5" y2="1"></line>
                <polyline id="tick" points="1 9.5 5 13.5 13 5.5"></polyline>
                <polyline id="normal" points="1 9.5 5 13.5 9 9.5"></polyline>
              </svg>
              <div>
                <svg viewBox="0 0 24 24"></svg>
              </div>
            </div>
            <ul>
              <li>Download Resume</li>
              <li>Waiting...</li>
              <li>Downloaded</li>
            </ul>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
