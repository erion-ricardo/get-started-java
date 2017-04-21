package br.ibm.com.blockchain.rest;

import br.ibm.com.blockchain.model.Asset;

public interface Blockchain<T extends Asset> {

	public String transferAsset(T prod);
}
