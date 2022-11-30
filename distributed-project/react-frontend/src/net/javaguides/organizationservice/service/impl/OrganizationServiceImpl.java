package net.javaguides.organizationservice.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.organizationservice.dto.OrganizationDto;
import net.javaguides.organizationservice.entity.Organization;
import net.javaguides.organizationservice.mapper.OrganizationMapper;
import net.javaguides.organizationservice.repository.OrganizationRepository;
import net.javaguides.organizationservice.service.OrganizationService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class OrganizationServiceImpl implements OrganizationService {

    private OrganizationRepository organizationRepository;

    @Override
    public OrganizationDto saveOrganization(OrganizationDto organizationDto) {

        // convert OrganizationDto into Organization jpa entity
        Organization organization = OrganizationMapper.mapToOrganization(organizationDto);

        Organization savedOrganization = organizationRepository.save(organization);

        return OrganizationMapper.mapToOrganizationDto(savedOrganization);
    }

    @Override
    public OrganizationDto getOrganizationByCode(String organizationCode) {
        Organization organization = organizationRepository.findByOrganizationCode(organizationCode);
        return OrganizationMapper.mapToOrganizationDto(organization);
    }
    @Override
    public List<OrganizationDto> findAll() {
        List<Organization> orgListEn=new ArrayList<>();
        List<OrganizationDto> orgListDto=new ArrayList<>();
        orgListEn=organizationRepository.findAll();
        for(int i=0;i<orgListEn.size();i++){
            orgListDto.add(OrganizationMapper.mapToOrganizationDto(orgListEn.get(i)));

        }
        return orgListDto;
    }
    @Override
    public OrganizationDto getOrgById(Long orgId) {
        System.out.print("getId===============================");
        Organization org = organizationRepository.findById(orgId).get();

        OrganizationDto orgDto = OrganizationMapper.mapToOrganizationDto(org);


        return orgDto;
    }
    @Override
    public OrganizationDto updateOrg(Long orgId,OrganizationDto depDto){
        Organization org = organizationRepository.findById(orgId).get();
        org.setOrganizationCode(depDto.getOrganizationCode());
        org.setOrganizationDescription(depDto.getOrganizationDescription());
        org.setOrganizationName(depDto.getOrganizationName());

        Organization updatedOrg = organizationRepository.save(org);

        return depDto;
    }
    @Override
    public String deleteOrg(Long orgId) {
        Organization org = organizationRepository.findById(orgId).get();

        organizationRepository.delete(org);

        return "OK";
    }
}
