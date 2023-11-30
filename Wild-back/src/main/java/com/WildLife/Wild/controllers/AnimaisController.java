package com.WildLife.Wild.controllers;
import com.WildLife.Wild.entities.AnimaisEntity;
import com.WildLife.Wild.service.AnimaisService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/animais")
public class AnimaisController {
    @Autowired
    private AnimaisService animaisService;

    @PostMapping("/save")
    public AnimaisEntity saveAnimais(@RequestBody AnimaisEntity animaisEntity){
        return animaisService.saveAnimais(animaisEntity);
    }

    @GetMapping("/list")
    public List<AnimaisEntity>animaisEntities(){
        return animaisService.getAnimaisList();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAnimais(@PathVariable Long id){
        animaisService.deleteById(id);
    }

    @PutMapping("/update/{id}")
    public AnimaisEntity update(@PathVariable Long id, @RequestBody AnimaisEntity animaisEntity){
        return animaisService.updateAnimais(animaisEntity, id);
    }

}
