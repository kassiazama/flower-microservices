package com.kassiazama.pedidoflower;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class PedidoFlowerApplication {

    public static void main(String[] args) {
        SpringApplication.run(PedidoFlowerApplication.class, args);
    }

}
