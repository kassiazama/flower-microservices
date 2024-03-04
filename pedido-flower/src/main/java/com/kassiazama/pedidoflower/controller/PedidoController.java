package com.kassiazama.pedidoflower.controller;

import com.kassiazama.pedidoflower.core.CrudController;
import com.kassiazama.pedidoflower.model.Pedido;
import com.kassiazama.pedidoflower.service.PedidoService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pedido")
@CrossOrigin(origins = "*", maxAge = 3600)
public class PedidoController extends CrudController<Pedido, Long> {

    public PedidoController(PedidoService service) {
        super(service);
    }

}
