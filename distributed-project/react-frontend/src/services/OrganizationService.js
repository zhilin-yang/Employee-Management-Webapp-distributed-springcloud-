import axios from 'axios';

const Org_API_BASE_URL = "http://localhost:9191/api/employeeman/organizations";


class OrganizationService {

    getOrgs() {
        return axios.get(Org_API_BASE_URL);
    }

    createOrg(org) {
        return axios.post(Org_API_BASE_URL, org);
    }

    getOrgById(orgId) {
        return axios.get(Org_API_BASE_URL + '/' + orgId);
    }

    updateOrg(orgDto, orgId) {
        return axios.put(Org_API_BASE_URL + '/' + orgId, orgDto);
    }

    deleteOrg(orgId) {
        return axios.delete(Org_API_BASE_URL + '/' + orgId);
    }

    getOrgByCode(orgCode) {
        return axios.get(Org_API_BASE_URL + '/' + orgCode);
    }

}

export default new OrganizationService()