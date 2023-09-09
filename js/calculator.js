// Function to append characters to the display
function appendToDisplay(value) {
    const display = document.getElementsByName("display")[0];
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const display = document.getElementsByName("display")[0];
    display.value = "";
  }
  
  // Function to delete the last character from the display
  function deleteLastChar() {
    const display = document.getElementsByName("display")[0];
    display.value = display.value.slice(0, -1);
  }
  
  // Function to calculate and display the result
  function calculateResult() {
    const display = document.getElementsByName("display")[0];
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  