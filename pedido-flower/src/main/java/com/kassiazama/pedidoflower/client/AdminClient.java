package com.kassiazama.pedidoflower.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@FeignClient("flower-admin")
public interface AdminClient {

    @RequestMapping(method = RequestMethod.PUT, value = "api/produto/{id}/{quantia}")
    void atualizaEstoque(@PathVariable Long id, @PathVariable Integer quantia);
}
