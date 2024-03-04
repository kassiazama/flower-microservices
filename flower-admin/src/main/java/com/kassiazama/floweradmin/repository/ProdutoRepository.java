package com.kassiazama.floweradmin.repository;

import com.kassiazama.floweradmin.core.CrudRepository;
import com.kassiazama.floweradmin.model.Produto;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, Long> {

}
