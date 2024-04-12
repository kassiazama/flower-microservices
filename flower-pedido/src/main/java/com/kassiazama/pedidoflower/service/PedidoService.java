package com.kassiazama.pedidoflower.service;

import com.kassiazama.pedidoflower.client.AdminClient;
import com.kassiazama.pedidoflower.core.CrudRepository;
import com.kassiazama.pedidoflower.core.CrudService;
import com.kassiazama.pedidoflower.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoService extends CrudService<Pedido, Long> {

    @Autowired
    private AdminClient client;

    public PedidoService(CrudRepository<Pedido, Long> repository) {
        super(repository);
    }

    @Override
    public Pedido save(Pedido entity) {
        client.atualizaEstoque(entity.getProdutoId(), entity.getQuantiaPedido());
        return super.save(entity);
    }

}
