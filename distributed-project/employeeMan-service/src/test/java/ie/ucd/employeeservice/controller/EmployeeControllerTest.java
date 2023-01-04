package ie.ucd.employeeservice.controller;

import net.minidev.json.JSONObject;
import org.junit.jupiter.api.*;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.Resource;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class EmployeeControllerTest {
    private Long emploeeId;

    @Resource
    private MockMvc mockMvc;

    @BeforeEach
    void setUp(WebApplicationContext wac) {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    @Test
    @Order(2)
    void getAllEmployees() throws Exception {
        this.mockMvc.perform(get("/api/employeeman/employees"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].firstName").value("John"))
                .andExpect(jsonPath("$[0].lastName").value("Smith"))
                .andExpect(jsonPath("$[0].email").value("admin@gmail.com"))
                .andExpect(jsonPath("$[0].departmentCode").value("HR001"))
                .andExpect(jsonPath("$[0].organizationCode").value("HR"))
                .andReturn();
    }

    @Test
    @Order(1)
    void saveEmployee() throws Exception {
        JSONObject jsonObject = new JSONObject();
        //jsonObject.put("id", "3");

        jsonObject.put("firstName", "John");
        jsonObject.put("lastName", "Smith");
        jsonObject.put("email", "admin@gmail.com");
        jsonObject.put("departmentCode", "HR001");
        jsonObject.put("organizationCode", "HR");
        String json = jsonObject.toJSONString();

        this.mockMvc.perform(post("/api/employeeman/employees")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.firstName").value("John"))
                .andExpect(jsonPath("$.lastName").value("Smith"))
                .andExpect(jsonPath("$.email").value("admin@gmail.com"))
                .andExpect(jsonPath("$.departmentCode").value("HR001"))
                .andExpect(jsonPath("$.organizationCode").value("HR"))
                .andReturn();

    }

    @Test
    @Order(3)
    void getEmployee() throws Exception {
        this.mockMvc.perform(get("/api/employeeman/employees/1"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.employee.firstName").value("John"))
                .andExpect(jsonPath("$.employee.lastName").value("Smith"))
                .andExpect(jsonPath("$.employee.email").value("admin@gmail.com"))
                .andExpect(jsonPath("$.employee.organizationCode").value("HR"))
                .andExpect(jsonPath("$.employee.departmentCode").value("HR001"))
                .andReturn();
    }
}