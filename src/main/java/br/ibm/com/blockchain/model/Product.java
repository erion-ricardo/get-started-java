package br.ibm.com.blockchain.model;

public class Product implements Asset {

	private String id;
	private String ownerId;

	public Product() {
		super();
	}

	public Product(String id, String ownerId) {
		this.id = id;
		this.ownerId = ownerId;
	}

	public String getId() {
		return id;
	}

	public String getOwnerId() {
		return ownerId;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setOwnerId(String ownerId) {
		this.ownerId = ownerId;
	}

}
