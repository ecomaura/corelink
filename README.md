# Corelink Oversees
Static multi-page website (HTML, CSS, JS). No build step.

Pages: `index.html`, `about.html`, `services.html`, `products.html`, `contact.html`.

## Replacing placeholders
Each image slot is a `<figure class="ph" data-label="...">`. Add an image inside it and the label hides automatically:

    <figure class="ph r43" data-label="..."><img src="images/your-photo.jpg" alt="Describe the photo"></figure>

Update the placeholder contact details (email, phone, address) in every page footer and in `contact.html`.
