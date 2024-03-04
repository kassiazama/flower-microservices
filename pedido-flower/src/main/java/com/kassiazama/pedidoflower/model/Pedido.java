package com.kassiazama.pedidoflower.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Pedido implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "produtoid")
    private Long produtoId;

    @Positive
    @NotNull
    @Column(name = "quantiapedido")
    private Integer quantiaPedido;

    @NotBlank
    @Size(max = 255)
    @Column(name = "nomecompleto")
    private String nomeCompleto;

    @NotBlank
    @Size(max = 100)
    private String email;

    @NotBlank
    @Size(max = 100)
    private String logradouro;

    @NotBlank
    @Size(max = 10)
    private String numero;

    @Size(max = 100)
    private String complemento;

    @NotBlank
    @Size(max = 100)
    private String bairro;

    @NotBlank
    @Size(max = 100)
    private String cidade;

    @NotBlank
    @Size(max = 100)
    private String estado;

    // mudar para implementação que consome o via CEP
}
