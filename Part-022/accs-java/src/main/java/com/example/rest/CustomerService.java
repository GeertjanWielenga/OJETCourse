package com.example.rest;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;

@Path("/customers")
public class CustomerService {

    private final CopyOnWriteArrayList<Customer> cList = CustomerList.getInstance();

@GET
@Produces(MediaType.APPLICATION_JSON)
@Path("/all")
public GenericEntity<List<Customer>> getAllCustomers() {
    List<Customer> list = CustomerList.getInstance();
    return new GenericEntity<List<Customer>>(list) {};
}

    @GET
    @Path("{id}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getCustomer(@PathParam("id") long id) {
        Optional<Customer> match
                = cList.stream()
                .filter(c -> c.getId() == id)
                .findFirst();
        if (match.isPresent()) {
            return "---Customer---\n" + match.get().toString();
        } else {
            return "Customer not found";
        }
    }

}
