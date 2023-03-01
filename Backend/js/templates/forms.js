export { addProductTemplate, deleteProductTemplate, editProductTemplate }

/*---------------------
-     Add products    -
---------------------*/

let addProductTemplate = `
    <div class="container mt-4">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <form>

                    <div class="mb-4">
                        <label class="form-label fw-semibold">Título</label>
                        <input class="form-control">
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-semibold">Precio</label>
                        <div class="input-group">
                        <span class="input-group-text">$</span>
                        <input type="number"class="form-control">
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="formFile" class="form-label fw-semibold">Imagen de referencia</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>

                    <div class="mb-4">
                        <label class="form-label fw-semibold">Categoría</label>
                        <select class="form-select">
                            <option value="" selected disabled>Selecciona una opción</option>
                            <option value="1">Cervezas</option>
                            <option value="2">Nuestra selección maestra</option>
                            <option value="3">Destilados</option>
                            <option value="4">Cocktails</option>
                            <option value="5">Snacks</option>
                            <option value="6">Sandwiches</option>
                            <option value="7">Burgers</option>
                            <option value="8">Brick Burgers</option>
                        </select>
                    </div>

                    <div class="mb-4 procedence">
                        <label class="form-label fw-semibold">Procedencia</label>
                        <input class="form-control">
                    </div>

                    <div class="mb-4">
                        <label for="exampleFormControlTextarea1" class="form-label fw-semibold">Descripción</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">Agregar</button>

                </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
`;

/*---------------------
-   Delete products   -
---------------------*/

let deleteProductTemplate = `
    <div class="container mt-4">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <form>

                <div class="mb-4">
                    <label class="form-label fw-semibold">Título</label>
                    <input class="form-control">
                </div>

                <div class="mb-4">
                    <label class="form-label fw-semibold">Categoría</label>
                    <select class="form-select">
                        <option value="" selected disabled>Selecciona una opción</option>
                        <option value="1">Cervezas</option>
                        <option value="2">Nuestra selección maestra</option>
                        <option value="3">Destilados</option>
                        <option value="4">Cocktails</option>
                        <option value="5">Snacks</option>
                        <option value="6">Sandwiches</option>
                        <option value="7">Burgers</option>
                        <option value="8">Brick Burgers</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-danger">Eliminar</button>

                </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
`;

/*---------------------
-    Edit products    -
---------------------*/

let editProductTemplate = `
    <div class="container mt-4">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8">
                <form>

                <div class="mb-4">
                    <label class="form-label fw-semibold">Categoría</label>
                    <select class="form-select">
                        <option value="" selected disabled>Selecciona una opción</option>
                        <option value="1">Cervezas</option>
                        <option value="2">Nuestra selección maestra</option>
                        <option value="3">Destilados</option>
                        <option value="4">Cocktails</option>
                        <option value="5">Snacks</option>
                        <option value="6">Sandwiches</option>
                        <option value="7">Burgers</option>
                        <option value="8">Brick Burgers</option>
                    </select>
                </div>

                <button type="submit" class="btn btn-warning">Editar</button>

                </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
`;

/*---------------------
-  Templates into div -
---------------------*/

$("#add-product").html(addProductTemplate);
$("#delete-product").html(deleteProductTemplate);
$("#edit-product").html(editProductTemplate);