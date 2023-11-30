package com.WildLife.Wild.controllers;

import com.WildLife.Wild.entities.FuncionariosEntity;
import com.WildLife.Wild.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {
    @Autowired
    private FuncionarioService funcionarioService;

    @PostMapping("/save")
    public FuncionariosEntity saveFuncionario(@RequestBody FuncionariosEntity funcionariosEntity){
        return funcionarioService.saveFuncionario(funcionariosEntity);
    }
    @GetMapping("/list")
    public List<FuncionariosEntity>funcionariolist(){
        return funcionarioService.getFuncionarioList();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFuncionario(@PathVariable Long id){
        funcionarioService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public FuncionariosEntity update(@PathVariable Long id, @RequestBody FuncionariosEntity funcionariosEntity){
        return funcionarioService.updateFuncionario(funcionariosEntity, id);
    }


}


