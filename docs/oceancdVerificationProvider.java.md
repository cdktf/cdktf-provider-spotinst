# `oceancdVerificationProvider` Submodule <a name="`oceancdVerificationProvider` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationProvider <a name="OceancdVerificationProvider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProvider;

OceancdVerificationProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .cloudWatch(OceancdVerificationProviderCloudWatch)
//  .datadog(OceancdVerificationProviderDatadog)
//  .id(java.lang.String)
//  .jenkins(OceancdVerificationProviderJenkins)
//  .newRelic(OceancdVerificationProviderNewRelic)
//  .prometheus(OceancdVerificationProviderPrometheus)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.clusterIds">clusterIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | prometheus block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.clusterIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}.

---

##### `cloudWatch`<sup>Optional</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.cloudWatch"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.datadog"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jenkins`<sup>Optional</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.jenkins"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}

---

##### `newRelic`<sup>Optional</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.newRelic"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.prometheus"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch">putCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog">putDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins">putJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic">putNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus">putPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch">resetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog">resetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins">resetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic">resetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus">resetPrometheus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudWatch` <a name="putCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch"></a>

```java
public void putCloudWatch(OceancdVerificationProviderCloudWatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `putDatadog` <a name="putDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog"></a>

```java
public void putDatadog(OceancdVerificationProviderDatadog value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `putJenkins` <a name="putJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins"></a>

```java
public void putJenkins(OceancdVerificationProviderJenkins value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `putNewRelic` <a name="putNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic"></a>

```java
public void putNewRelic(OceancdVerificationProviderNewRelic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `putPrometheus` <a name="putPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus"></a>

```java
public void putPrometheus(OceancdVerificationProviderPrometheus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `resetCloudWatch` <a name="resetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch"></a>

```java
public void resetCloudWatch()
```

##### `resetDatadog` <a name="resetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog"></a>

```java
public void resetDatadog()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId"></a>

```java
public void resetId()
```

##### `resetJenkins` <a name="resetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins"></a>

```java
public void resetJenkins()
```

##### `resetNewRelic` <a name="resetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic"></a>

```java
public void resetNewRelic()
```

##### `resetPrometheus` <a name="resetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus"></a>

```java
public void resetPrometheus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProvider;

OceancdVerificationProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProvider;

OceancdVerificationProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProvider;

OceancdVerificationProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProvider;

OceancdVerificationProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceancdVerificationProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceancdVerificationProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceancdVerificationProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput">cloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput">clusterIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput">datadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput">jenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput">newRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput">prometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds">clusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudWatch`<sup>Required</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch"></a>

```java
public OceancdVerificationProviderCloudWatchOutputReference getCloudWatch();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog"></a>

```java
public OceancdVerificationProviderDatadogOutputReference getDatadog();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a>

---

##### `jenkins`<sup>Required</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins"></a>

```java
public OceancdVerificationProviderJenkinsOutputReference getJenkins();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a>

---

##### `newRelic`<sup>Required</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic"></a>

```java
public OceancdVerificationProviderNewRelicOutputReference getNewRelic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus"></a>

```java
public OceancdVerificationProviderPrometheusOutputReference getPrometheus();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a>

---

##### `cloudWatchInput`<sup>Optional</sup> <a name="cloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput"></a>

```java
public OceancdVerificationProviderCloudWatch getCloudWatchInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `clusterIdsInput`<sup>Optional</sup> <a name="clusterIdsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput"></a>

```java
public java.util.List<java.lang.String> getClusterIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datadogInput`<sup>Optional</sup> <a name="datadogInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput"></a>

```java
public OceancdVerificationProviderDatadog getDatadogInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jenkinsInput`<sup>Optional</sup> <a name="jenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput"></a>

```java
public OceancdVerificationProviderJenkins getJenkinsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `newRelicInput`<sup>Optional</sup> <a name="newRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput"></a>

```java
public OceancdVerificationProviderNewRelic getNewRelicInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput"></a>

```java
public OceancdVerificationProviderPrometheus getPrometheusInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds"></a>

```java
public java.util.List<java.lang.String> getClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationProviderCloudWatch <a name="OceancdVerificationProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderCloudWatch;

OceancdVerificationProviderCloudWatch.builder()
    .iamArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn">iamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}. |

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn"></a>

```java
public java.lang.String getIamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}.

---

### OceancdVerificationProviderConfig <a name="OceancdVerificationProviderConfig" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderConfig;

OceancdVerificationProviderConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .clusterIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
//  .cloudWatch(OceancdVerificationProviderCloudWatch)
//  .datadog(OceancdVerificationProviderDatadog)
//  .id(java.lang.String)
//  .jenkins(OceancdVerificationProviderJenkins)
//  .newRelic(OceancdVerificationProviderNewRelic)
//  .prometheus(OceancdVerificationProviderPrometheus)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds">clusterIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | prometheus block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds"></a>

```java
public java.util.List<java.lang.String> getClusterIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}.

---

##### `cloudWatch`<sup>Optional</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch"></a>

```java
public OceancdVerificationProviderCloudWatch getCloudWatch();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog"></a>

```java
public OceancdVerificationProviderDatadog getDatadog();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jenkins`<sup>Optional</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins"></a>

```java
public OceancdVerificationProviderJenkins getJenkins();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}

---

##### `newRelic`<sup>Optional</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic"></a>

```java
public OceancdVerificationProviderNewRelic getNewRelic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus"></a>

```java
public OceancdVerificationProviderPrometheus getPrometheus();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}

---

### OceancdVerificationProviderDatadog <a name="OceancdVerificationProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderDatadog;

OceancdVerificationProviderDatadog.builder()
    .address(java.lang.String)
    .apiKey(java.lang.String)
    .appKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey">appKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}.

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}.

---

### OceancdVerificationProviderJenkins <a name="OceancdVerificationProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderJenkins;

OceancdVerificationProviderJenkins.builder()
    .apiToken(java.lang.String)
    .baseUrl(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}. |

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}.

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}.

---

### OceancdVerificationProviderNewRelic <a name="OceancdVerificationProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderNewRelic;

OceancdVerificationProviderNewRelic.builder()
    .accountId(java.lang.String)
    .personalApiKey(java.lang.String)
//  .baseUrlNerdGraph(java.lang.String)
//  .baseUrlRest(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey">personalApiKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph">baseUrlNerdGraph</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest">baseUrlRest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}.

---

##### `personalApiKey`<sup>Required</sup> <a name="personalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey"></a>

```java
public java.lang.String getPersonalApiKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}.

---

##### `baseUrlNerdGraph`<sup>Optional</sup> <a name="baseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph"></a>

```java
public java.lang.String getBaseUrlNerdGraph();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}.

---

##### `baseUrlRest`<sup>Optional</sup> <a name="baseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest"></a>

```java
public java.lang.String getBaseUrlRest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}.

---

### OceancdVerificationProviderPrometheus <a name="OceancdVerificationProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderPrometheus;

OceancdVerificationProviderPrometheus.builder()
    .address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.228.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationProviderCloudWatchOutputReference <a name="OceancdVerificationProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderCloudWatchOutputReference;

new OceancdVerificationProviderCloudWatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput">iamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn">iamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iamArnInput`<sup>Optional</sup> <a name="iamArnInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput"></a>

```java
public java.lang.String getIamArnInput();
```

- *Type:* java.lang.String

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn"></a>

```java
public java.lang.String getIamArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue"></a>

```java
public OceancdVerificationProviderCloudWatch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---


### OceancdVerificationProviderDatadogOutputReference <a name="OceancdVerificationProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderDatadogOutputReference;

new OceancdVerificationProviderDatadogOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput">appKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey">appKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput"></a>

```java
public java.lang.String getAppKeyInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey"></a>

```java
public java.lang.String getAppKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue"></a>

```java
public OceancdVerificationProviderDatadog getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---


### OceancdVerificationProviderJenkinsOutputReference <a name="OceancdVerificationProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderJenkinsOutputReference;

new OceancdVerificationProviderJenkinsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken">apiToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput"></a>

```java
public java.lang.String getApiTokenInput();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken"></a>

```java
public java.lang.String getApiToken();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue"></a>

```java
public OceancdVerificationProviderJenkins getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---


### OceancdVerificationProviderNewRelicOutputReference <a name="OceancdVerificationProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderNewRelicOutputReference;

new OceancdVerificationProviderNewRelicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph">resetBaseUrlNerdGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest">resetBaseUrlRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrlNerdGraph` <a name="resetBaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph"></a>

```java
public void resetBaseUrlNerdGraph()
```

##### `resetBaseUrlRest` <a name="resetBaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest"></a>

```java
public void resetBaseUrlRest()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion"></a>

```java
public void resetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput">baseUrlNerdGraphInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput">baseUrlRestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput">personalApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph">baseUrlNerdGraph</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest">baseUrlRest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey">personalApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `baseUrlNerdGraphInput`<sup>Optional</sup> <a name="baseUrlNerdGraphInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput"></a>

```java
public java.lang.String getBaseUrlNerdGraphInput();
```

- *Type:* java.lang.String

---

##### `baseUrlRestInput`<sup>Optional</sup> <a name="baseUrlRestInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput"></a>

```java
public java.lang.String getBaseUrlRestInput();
```

- *Type:* java.lang.String

---

##### `personalApiKeyInput`<sup>Optional</sup> <a name="personalApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput"></a>

```java
public java.lang.String getPersonalApiKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `baseUrlNerdGraph`<sup>Required</sup> <a name="baseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph"></a>

```java
public java.lang.String getBaseUrlNerdGraph();
```

- *Type:* java.lang.String

---

##### `baseUrlRest`<sup>Required</sup> <a name="baseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest"></a>

```java
public java.lang.String getBaseUrlRest();
```

- *Type:* java.lang.String

---

##### `personalApiKey`<sup>Required</sup> <a name="personalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey"></a>

```java
public java.lang.String getPersonalApiKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue"></a>

```java
public OceancdVerificationProviderNewRelic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---


### OceancdVerificationProviderPrometheusOutputReference <a name="OceancdVerificationProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_verification_provider.OceancdVerificationProviderPrometheusOutputReference;

new OceancdVerificationProviderPrometheusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue"></a>

```java
public OceancdVerificationProviderPrometheus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---



