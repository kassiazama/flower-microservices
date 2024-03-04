package com.kassiazama.floweradmin.controller;

import com.kassiazama.floweradmin.core.CrudController;
import com.kassiazama.floweradmin.model.Produto;
import com.kassiazama.floweradmin.service.ProdutoService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produto")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProdutoController extends CrudController<Produto, Long> {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        super(produtoService);
        this.produtoService = produtoService;
    }

    @PutMapping("/{id}/{quantia}")
    public void atualizarEstoque(@PathVariable("id") Long id, @PathVariable("quantia") Integer quantia) {
        produtoService.atualizarEstoque(id, quantia);
    }
}
