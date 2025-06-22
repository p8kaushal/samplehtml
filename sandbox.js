 function updateTime() {
            const now = new Date();
            document.getElementById('time').textContent = now.toUTCString();
            document.getElementById('time').style.color = 'blue';
            document.getElementById('time').style.fontSize = '20px';
            document.getElementById('time').style.fontFamily = 'Arial, sans-serif';
            document.getElementById('time').style.textAlign = 'center';
            document.getElementById('time').style.marginTop = '20px';
        }
        setInterval(updateTime, 1000);
        updateTime();