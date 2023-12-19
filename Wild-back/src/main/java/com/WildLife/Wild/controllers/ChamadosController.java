package com.WildLife.Wild.controllers;


import com.WildLife.Wild.entities.ChamadosEntity;
import com.WildLife.Wild.service.ChamadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chamados")
public class ChamadosController {
    @Autowired
    private ChamadosService chamadosService;

    @PostMapping("/save")
    private ChamadosEntity saveChamados(@RequestBody ChamadosEntity chamadosEntity){
        return chamadosService.saveChamados(chamadosEntity);
    }

    @GetMapping("/list")
    public List<ChamadosEntity> chamadosEntitylist(){
        return chamadosService.getChamadosList();
    }
    @DeleteMapping("/delete/{id}")
    public void ChamadosEntity (@PathVariable Long id) {
        chamadosService.DeleteById(id);
    }

    @PutMapping("/update{id}")
    public ChamadosEntity update(@PathVariable Long id, @RequestBody ChamadosEntity chamadosEntity){
        return chamadosService.updateChamados(chamadosEntity, id);
    }



}
