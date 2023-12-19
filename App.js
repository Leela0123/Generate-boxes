function generateBoxes() {
      const boxNumber = document.getElementById('boxNumber').value;
      const boxContainer = document.getElementById('boxContainer');

      // Clear existing boxes
      boxContainer.innerHTML = '';

      // Calculate box size dynamically based on the container size and the number of boxes
      const boxHeight = boxContainer.clientHeight / boxNumber;
      const boxWidth = boxContainer.clientWidth/boxNumber; // Set the width to be twice the height

      // Generate new boxes within the container
      for (let i = 0; i < boxNumber; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.width = boxWidth + 'px';
        box.style.height = boxHeight + 'px';
        box.style.bottom = i * boxHeight + 'px'; // Adjust spacing as needed
        box.style.left = i * boxWidth + 'px';   // Adjust spacing as needed
        boxContainer.appendChild(box);
      }
    }
