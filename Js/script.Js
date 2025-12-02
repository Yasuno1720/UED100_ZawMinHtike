document.addEventListener("DOMContentLoaded", () => {
  // Learn more button (home page)
  const learnBtn = document.getElementById("learnBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      alert("This prototype demonstrates a Canva-inspired interface built with HTML, CSS, JavaScript and multimedia assets for UED100 Assessment 2.");
    });
  }

  // Subscribe behaviour (home page)
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      const emailInput = document.getElementById("emailInput");
      const message = document.getElementById("subscribeMsg");
      const email = emailInput.value.trim();

      if (email === "") {  // Basic validation
        message.textContent = "Please enter your email before subscribing.";
        message.style.color = "red";
      } else if (!email.includes("@") || !email.includes(".")) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
      } else {
        message.textContent = "Thank you! You have successfully subscribed.";
        message.style.color = "green";
      }
    });
  }

  // Contact form (home page)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Stops page refresh

      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const msg = document.getElementById("contactMessage").value.trim();
      const contactMsg = document.getElementById("contactMsg");
// Validation
      if (!name || !email || !msg) {
        contactMsg.textContent = "Please fill in all fields before sending.";
        contactMsg.style.color = "red";
      } else {
        contactMsg.textContent = "Thank you for your message. We will get back to you soon.";
        contactMsg.style.color = "green";
        contactForm.reset(); // Reset form fields
      }
    });
  }

  // Workspace interactions (start-designing page)
  const canvasArea = document.getElementById("canvasArea");
  if (canvasArea) {  // Get tool buttons
    const addTextBtn = document.getElementById("addTextBtn");
    const addShapeBtn = document.getElementById("addShapeBtn");
    const addImageBtn = document.getElementById("addImageBtn");
    const clearCanvasBtn = document.getElementById("clearCanvasBtn");
    const templateButtons = document.querySelectorAll(".template-btn");
    const mockSaveBtn = document.getElementById("mockSaveBtn");
    const saveMsg = document.getElementById("saveMsg");

    // Helper to add an item to canvas
    function addCanvasItem(element) {
      element.classList.add("canvas-item");
      element.style.top = Math.random() * 200 + 50 + "px";
      element.style.left = Math.random() * 300 + 50 + "px";
      canvasArea.appendChild(element);
    }

    // Add text
    if (addTextBtn) {
      addTextBtn.addEventListener("click", () => {
        const text = document.createElement("div");
        text.textContent = "Sample Text";
        text.style.padding = "6px 10px";
        text.style.background = "rgba(255,255,255,0.9)";
        text.style.borderRadius = "4px";
        addCanvasItem(text);
      });
    }

    // Add shape
    if (addShapeBtn) {
      addShapeBtn.addEventListener("click", () => {
        const shape = document.createElement("div");
        shape.style.width = "120px";
        shape.style.height = "80px";
        shape.style.background = "#0d6efd";
        shape.style.borderRadius = "8px";
        addCanvasItem(shape);
      });
    }

    // Add image
    if (addImageBtn) {
      addImageBtn.addEventListener("click", () => {
        const img = document.createElement("img");
        img.src = "images/Design.png";
        img.style.width = "150px";
        addCanvasItem(img);
      });
    }

    // Clear canvas
    if (clearCanvasBtn) {
      clearCanvasBtn.addEventListener("click", () => {
        canvasArea.innerHTML = "<p class='text-muted text-center mt-5'>Canvas cleared. Use the tools on the left to add new elements.</p>";
      });
    }

    // Templates buttons
    templateButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-template");
        canvasArea.innerHTML = "";

        if (type === "welcome") {
          const title = document.createElement("h2");
          title.textContent = "Welcome to CanvaPrototype!";
          addCanvasItem(title);
        } else if (type === "sale") {
          const box = document.createElement("div");
          box.textContent = "BIG SALE 50% OFF";
          box.style.padding = "15px";
          box.style.background = "#ffc107";
          box.style.borderRadius = "8px";
          addCanvasItem(box);
        } else if (type === "social") {
          const text = document.createElement("div");
          text.textContent = "@yourcreativehandle";
          text.style.padding = "10px";
          text.style.background = "#fff";
          text.style.border = "1px solid #ccc";
          text.style.borderRadius = "20px";
          addCanvasItem(text);
        }
      });
    });

    // Simulate save feature
    if (mockSaveBtn && saveMsg) {
      mockSaveBtn.addEventListener("click", () => {
        saveMsg.textContent = "Your design has been saved (simulated). In a full app this would export your design.";
        saveMsg.style.color = "green";
      });
    }
  }
});
