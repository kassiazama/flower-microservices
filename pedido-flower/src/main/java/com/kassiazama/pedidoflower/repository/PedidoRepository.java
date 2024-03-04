package com.kassiazama.pedidoflower.repository;

import com.kassiazama.pedidoflower.core.CrudRepository;
import com.kassiazama.pedidoflower.model.Pedido;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends CrudRepository<Pedido, Long> {

}
