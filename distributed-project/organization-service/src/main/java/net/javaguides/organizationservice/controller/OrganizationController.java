package net.javaguides.organizationservice.controller;

import lombok.AllArgsConstructor;
import net.javaguides.organizationservice.dto.OrganizationDto;
import net.javaguides.organizationservice.service.OrganizationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/organizations")
@AllArgsConstructor
public class OrganizationController {

    private OrganizationService organizationService;
    @GetMapping()
    public ResponseEntity <List<OrganizationDto>> getAllOrgs(){
        List <OrganizationDto> orgListDto=organizationService.findAll();
        return new ResponseEntity<>(orgListDto, HttpStatus.OK);
    }

    // Build Save Organization REST API
    @PostMapping
    public ResponseEntity<OrganizationDto> saveOrganization(@RequestBody OrganizationDto organizationDto){
        OrganizationDto savedOrganization = organizationService.saveOrganization(organizationDto);
        return new ResponseEntity<>(savedOrganization, HttpStatus.CREATED);
    }

    // Build Get Organization by Code REST API
    @GetMapping("/getOrgByCode/{code}")
    public ResponseEntity<OrganizationDto> getOrganization(@PathVariable("code") String organizationCode){
        OrganizationDto organizationDto = organizationService.getOrganizationByCode(organizationCode);
        return ResponseEntity.ok(organizationDto);
    }
    // Build Get Employee REST API
    @GetMapping("/{id}")
    public ResponseEntity<OrganizationDto> getOrg(@PathVariable("id") Long orgId){
        OrganizationDto orgDto = organizationService.getOrgById(orgId);
        return new ResponseEntity<>(orgDto, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrganizationDto> updateOrg(@RequestBody OrganizationDto orgDto,@PathVariable("id") Long orgId){
        OrganizationDto orgDtoNew = organizationService.updateOrg(orgId,orgDto);
        return new ResponseEntity<>(orgDtoNew, HttpStatus.OK);

    }
    // delete employee rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOrg(@PathVariable Long id){
        String req = organizationService.deleteOrg(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
