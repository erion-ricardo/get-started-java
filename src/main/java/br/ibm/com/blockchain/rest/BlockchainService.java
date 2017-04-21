package br.ibm.com.blockchain.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import br.ibm.com.blockchain.model.Product;

@ApplicationPath("api")
@Path("/blockchain")
public class BlockchainService implements Blockchain<Product> {

	private GsonBuilder jsonBuilder;
	
	{
		jsonBuilder = new GsonBuilder();
	}
	
	@POST
	@Path("/transf")
	@Consumes("application/json")
	@Produces("application/text")
	@Override
	public String transferAsset(Product prod) {
		return "Asset [" + prod.getId() + "] added to Owner[" + prod.getOwnerId() + "]";
	}

	@GET
	@Path("/echo/{message}")
	@Consumes("application/text")
	@Produces("application/json")
	public String echoMessage(@PathParam("message") String message) {
		Gson gson = jsonBuilder.create();
		
		return gson.toJson("{Just Echoing the message : [ " + message + " ]}");
	}
}
