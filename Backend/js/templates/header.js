export { headerTemplate }

let headerTemplate = `
<header class="p-2 bg-dark container-fluid d-flex justify-content-between">
      <div class="ms-2">
        <a href="#" id="hamburger" class="text-white">
          <i class="bi bi-list" style="font-size: 2rem;"></i>
        </a>
      </div>   
      <div class="d-flex flex-wrap align-items-center justify-content-center">
        <a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src="/img/logo.jpg" alt="" width=50" height="50" class="rounded-circle me-2">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a class="nav-link px-2 text-white">Schopería 4 1/2</a></li>
        </ul>
      </div>
      <div class="mt-2">
          <button type="button" class="btn btn-outline-light me-2">Cerrar sesión</button>
      </div>
  </header>
`;

$("#header").html(headerTemplate);