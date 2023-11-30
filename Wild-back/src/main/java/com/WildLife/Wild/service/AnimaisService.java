package com.WildLife.Wild.service;
import com.WildLife.Wild.entities.AnimaisEntity;
import com.WildLife.Wild.repository.AnimaisRepository;
import com.WildLife.Wild.controllers.AnimaisController;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class AnimaisService {

    @Autowired
    private AnimaisRepository repository;

    public List<AnimaisEntity> getAnimaisList() {
        return repository.findAll();
    }

    public AnimaisEntity saveAnimais(AnimaisEntity animais) {
        return repository.save(animais);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public AnimaisEntity updateAnimais(AnimaisEntity animais, Long id) {
        AnimaisEntity target = repository.findById(id).orElseThrow(() -> new Error("animal não encontrado"));
        target.setCpf_identificaçao(animais.getCpf_identificaçao() == null ? target.getCpf_identificaçao() : animais.getCpf_identificaçao());
        target.setData_hora(animais.getData_hora() == null ? target.getData_hora() : animais.getData_hora());
        target.setOrg_responsavel(animais.getOrg_responsavel() == null ? target.getOrg_responsavel() : animais.getOrg_responsavel());
        target.setEntrega(animais.getEntrega() == null ? target.getEntrega() : animais.getEntrega());
        target.setNome(animais.getNome() == null ? target.getNome() : animais.getNome());
        target.setNome_cientifico(animais.getNome_cientifico() == null ? target.getNome_cientifico() : animais.getNome_cientifico());
        target.setLocal_entrega(animais.getLocal_entrega() == null ? target.getLocal_entrega() : animais.getLocal_entrega());
        target.setSexo(animais.getSexo() == null ? target.getSexo() : animais.getSexo());
        target.setCativeiro(animais.getCativeiro() == null ? target.getCativeiro() : animais.getCativeiro());
        target.setSaude(animais.getSaude() == null ? target.getSaude() : animais.getSaude());
        target.setRegistro_animal(animais.getRegistro_animal() == null ? target.getRegistro_animal() : animais.getRegistro_animal());
        target.setObservaçao(animais.getObservaçao() == null ? target.getObservaçao() : animais.getObservaçao());
        target.setEntregue_por(animais.getEntregue_por() == null ? target.getEntregue_por() : animais.getEntregue_por());
        target.setRecebido(animais.getRecebido() == null ? target.getRecebido() : animais.getRecebido());

        return repository.save(target);
    }



}
