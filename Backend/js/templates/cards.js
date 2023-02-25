let cardsTemplate = `
<div class="col">
    <div class="card mt-4" style="width: 14rem;">
        <div class="card-body">
            <h5 class="card-title">Mesa 1</h5>
            <div class="row">
                <a href="#" class="col btn btn-primary m-2">Atención</a>
                <a href="#" class="col btn btn-primary m-2">Cuenta</a>
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="text-center">Detalles</a>
            </div>
        </div>
    </div>
</div>
`;

$(".cards").html(cardsTemplate);
