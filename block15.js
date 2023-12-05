function countFlavors() {
    const flavorsInput = document.getElementById("flavors");
    const flavors = flavorsInput.value.split(",");
    const counts = {};
    for (const flavor of flavors) {
      counts[flavor] = (counts[flavor] || 0) + 1;
    }
    const flavorsTable = document.getElementById("flavorsTable");
    const flavorsTableBody = flavorsTable.getElementsByTagName("tbody")[0];
    flavorsTableBody.innerHTML = "";
    for (const flavor in counts) {
      const count = counts[flavor];
      const row = flavorsTableBody.insertRow();
      const flavorCell = row.insertCell();
      const countCell = row.insertCell();
      flavorCell.innerHTML = flavor;
      countCell.innerHTML = count;
    }
  }
  