
    function generateBoxes() {
      const boxNumber = document.getElementById('boxNumber').value;
      const boxContainer = document.getElementById('boxContainer');

      // Clear existing boxes
      boxContainer.innerHTML = '';

      // Calculate box size dynamically based on the container size and the number of boxes
      const boxSize = Math.min(boxContainer.clientWidth / boxNumber, boxContainer.clientHeight / boxNumber);

      // Generate new boxes within the container
      for (let i = 0; i < boxNumber; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = box.style.height = boxSize + 'px';
        box.style.bottom = i * boxSize + 'px'; // Adjust spacing as needed
        box.style.left = i * boxSize + 'px';   // Adjust spacing as needed
        boxContainer.appendChild(box);
      }
    }
  
