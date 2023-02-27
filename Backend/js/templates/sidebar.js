let sidebarBigTemplate = `
<div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 200px;">
  <div class="d-flex">
    <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <i class="bi bi-list" style="font-size: 1.5rem;"></i>
    </a>
    <span class="fs-5 text-center">Panel de mesas</span>
  </div>    
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      
      <li class="nav-item">
        <a href="#" id="card-view" class="nav-link active" aria-current="page">
          <i class="bi bi-columns-gap"></i><span class="ms-2">Vista Mesas</span>
        </a>
      </li>

      <li class="nav-item">
        <a class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#cart-collapse" aria-expanded="false">
          <i class="bi bi-caret-right"></i><span class="ms-2">Editar Menú</span>
        </a>
        <div class="collapse" id="cart-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" id="new-product" class="link-dark d-inline-flex text-decoration-none rounded">Agregar Producto</a></li>
            <li><a href="#" id="del-product" class="link-dark d-inline-flex text-decoration-none rounded">Eliminar Producto</a></li>
            <li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Editar Producto</a></li>
          </ul>
        </div>
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

      <li>
        <a href="#" class="nav-link link-dark">
          <i class="bi bi-columns-gap"></i><span class="ms-2">Vista General</span>
        </a>
      </li>

    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
`;

$("#sidebar").html(sidebarBigTemplate);
