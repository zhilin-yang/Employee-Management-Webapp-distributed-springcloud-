package net.javaguides.organizationservice.service;

import net.javaguides.organizationservice.dto.OrganizationDto;

import java.util.List;

public interface OrganizationService {
    OrganizationDto saveOrganization(OrganizationDto organizationDto);

    OrganizationDto getOrganizationByCode(String organizationCode);
    List<OrganizationDto> findAll();
    OrganizationDto getOrgById(Long depId);
    OrganizationDto updateOrg(Long depId,OrganizationDto orgDto);
    String deleteOrg(Long depId);
}
