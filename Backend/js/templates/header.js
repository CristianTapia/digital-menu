export { headerTemplate }

let headerTemplate = `
<header class="p-3 bg-dark">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="/img/logo.jpg" alt="" width=50" height="50" class="rounded-circle me-2">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white start-0">Schopería 4 1/2</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </header>
`;

$("#header").html(headerTemplate);
