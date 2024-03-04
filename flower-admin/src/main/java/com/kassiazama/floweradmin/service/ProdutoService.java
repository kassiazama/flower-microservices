package com.kassiazama.floweradmin.service;

import com.kassiazama.floweradmin.core.CrudService;
import com.kassiazama.floweradmin.model.Produto;
import com.kassiazama.floweradmin.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProdutoService extends CrudService<Produto, Long> {

    public ProdutoService(ProdutoRepository repository) {
        super(repository);
    }

    public void atualizarEstoque(Long id, Integer quantia) {

        //TODO: refactor -> não preciso salvar toda a entidade novamente.

        Optional<Produto> byId = this.findById(id);

        byId.ifPresent( f -> {
            f.setQuantiaEstoque(f.getQuantiaEstoque() - quantia);
            this.save(f);
        });
    }

    @Override
    public List<Produto> findAll() {
        List<Produto> produtos = super.findAll();
        return produtos.stream()
                .sorted(Comparator.comparing(Produto::getId))
                .collect(Collectors.toList());
    }
}
