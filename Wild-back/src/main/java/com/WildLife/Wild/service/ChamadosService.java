package com.WildLife.Wild.service;


import com.WildLife.Wild.entities.ChamadosEntity;
import com.WildLife.Wild.repository.ChamadosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class ChamadosService {
    @Autowired
    private ChamadosRepository chamadosRepository;

    public List<ChamadosEntity> getChamadosList() {
        return chamadosRepository.findAll();
    }

    public ChamadosEntity saveChamados(ChamadosEntity chamados){
        return chamadosRepository.save(chamados);
    }

    public void DeleteById(Long id){
        chamadosRepository.deleteById(id);
    }


    public ChamadosEntity updateChamados(ChamadosEntity chamados, Long id){
        ChamadosEntity target=chamadosRepository.findById(id).orElseThrow(()-> new Error("chamados não encontrado"));
        target.setNome(chamados.getNome() == null? target.getNome() : chamados.getNome());
        target.setTelefone(chamados.getTelefone() == null? target.getTelefone() : chamados.getTelefone());
        target.setEspecie(chamados.getEspecie()== null? target.getEspecie() : chamados.getEspecie());
        target.setCep(chamados.getCep()== null? target.getCep() : chamados.getCep());
        target.setRua(chamados.getRua() == null ? target.getRua() : chamados.getRua());
        target.setNumero(chamados.getNumero() == null? target.getNumero() : chamados.getNumero());
        target.setComplemento(chamados.getComplemento() == null? target.getComplemento() : chamados.getComplemento());
        target.setBairro(chamados.getBairro() == null? target.getBairro(): chamados.getBairro());
        return chamadosRepository.save(target);







    }






}
