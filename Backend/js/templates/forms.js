export { addProductTemplate, deleteProductTemplate }

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
                    <select class="form-select" aria-label="Default select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>

                <div class="mb-4">
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
                    <select class="form-select" aria-label="Default select example">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="form-label fw-semibold">Procedencia</label>
                    <input class="form-control">
                </div>

                <div class="mb-4">
                    <label for="exampleFormControlTextarea1" class="form-label fw-semibold">Descripción</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Eliminar</button>

                </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
`;

$("#add-product").html(addProductTemplate);
$("#delete-product").html(deleteProductTemplate);