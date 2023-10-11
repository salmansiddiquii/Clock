setInterval(() => {
    const d = new Date();
  
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
  
    const hRotation = 30 * htime + mtime / 2;
    const mRotation = 6 * mtime;
    const sRotation = 6 * stime;
  
    const hour = document.querySelector('.hour'); // Replace 'hour' with the actual ID of the hour hand element
    const minute = document.querySelector('.minute'); // Replace 'minute' with the actual ID of the minute hand element
    const second = document.querySelector('.second'); // Replace 'second' with the actual ID of the second hand element
  
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
  }, 1000);
  