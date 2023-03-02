export { sidebarBigTemplate, sidebarSmallTemplate }

let sidebarBigTemplate = `
  <ul class="nav nav-pills flex-column mb-auto">
    
    <li class="nav-item">
      <a href="#" id="card-view" class="nav-link active" aria-current="page">
        <i class="bi bi-columns-gap"></i><span class="ms-2">Vista Mesas</span>
      </a>
    </li>

    <li>
      <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#cart-collapse" aria-expanded="false">
        <i class="bi bi-caret-right"></i><label class="ms-2">Editar Menú</label>
      </a>
      <div class="collapse" id="cart-collapse" style="">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" id="new-product" class="link-dark d-inline-flex text-decoration-none rounded">Agregar Producto</a></li>
          <li><a href="#" id="del-product" class="link-dark d-inline-flex text-decoration-none rounded">Eliminar Producto</a></li>
          <li><a href="#" id="change-product"class="link-dark d-inline-flex text-decoration-none rounded">Editar Producto</a></li>
        </ul>
      </div>
    </li>
    
    <li>
      <a href="#" class="nav-link link-dark">
      <i class="bi bi-shop"></i><span class="ms-2">Vista de Planta</span>
      </a>
    </li>

    <li>
      <a href="#" class="nav-link link-dark">
        <i class="bi bi-columns-gap"></i><span class="ms-2">Vista General</span>
      </a>
    </li>

    <li>
      <a href="#" class="nav-link link-dark">
        <i class="bi bi-columns-gap"></i><span class="ms-2">Vista General</span>
      </a>
    </li>

  </ul>
  <hr>
  <div class="dropdown">
    <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="/img/logo.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
      <strong>Admin</strong>
    </a>
    <ul class="dropdown-menu text-small shadow">
      <li><a class="dropdown-item" href="#">Configuración</a></li>
      <li><a class="dropdown-item" href="#">Perfil</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
    </ul>
  </div>
`;

let sidebarSmallTemplate = `
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="#" id="card-view" class="nav-link active" aria-current="page">
        <i class="bi bi-columns-gap"></i>
      </a>
    </li>

    <li>
      <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0">
        <i class="bi bi-caret-right"></i>
      </a>
    </li>
    
    <li>
      <a href="#" class="nav-link link-dark"><i class="bi bi-shop"></i></a>
    </li>

    <li>
      <a href="#" class="nav-link link-dark"><i class="bi bi-columns-gap"></i></a>
    </li>

    <li>
      <a href="#" class="nav-link link-dark"><i class="bi bi-columns-gap"></i></a>
    </li>
  </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/img/logo.jpg" alt="" width="32" height="32" class="rounded-circle">
      </a>
    </div>
`;

  $("#sidebar-big").html(sidebarBigTemplate);
  $("#sidebar-small").html(sidebarSmallTemplate);