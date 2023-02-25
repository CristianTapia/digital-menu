let addProductTemplate = `
<div class="container mt-4">
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <form>
            <div class="mb-4">
                <label class="form-label fw-semibold">Nombre</label>
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
                <label class="form-label fw-semibold">Procedencia</label>
                <input class="form-control">
            </div>
            <div class="mb-4">
                <label for="formFile" class="form-label fw-semibold">Imagen de referencia</label>
                <input class="form-control" type="file" id="formFile">
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

$("#add-product").html(addProductTemplate);