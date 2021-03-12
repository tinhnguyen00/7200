function display(x) {
  switch (x) {
    case 1:
      document.getElementById('one').style.display = 'flex';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'none';
      break;
    case 2:
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'flex';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'none';
      break;
    case 3:
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'flex';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'none';
      break;
    case 4:
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'flex';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'none';
      break;
    case 5:
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'flex';
      document.getElementById('six').style.display = 'none';
      break;
    case 6:
      document.getElementById('one').style.display = 'none';
      document.getElementById('two').style.display = 'none';
      document.getElementById('three').style.display = 'none';
      document.getElementById('four').style.display = 'none';
      document.getElementById('five').style.display = 'none';
      document.getElementById('six').style.display = 'flex';
      break;
  }
}