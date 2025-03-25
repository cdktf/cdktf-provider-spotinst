# `oceanSpark` Submodule <a name="`oceanSpark` Submodule" id="@cdktf/provider-spotinst.oceanSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSpark <a name="OceanSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark spotinst_ocean_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSpark;

OceanSpark.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .oceanClusterId(java.lang.String)
//  .compute(OceanSparkCompute)
//  .id(java.lang.String)
//  .ingress(OceanSparkIngress)
//  .logCollection(OceanSparkLogCollection)
//  .spark(OceanSparkSpark)
//  .webhook(OceanSparkWebhook)
//  .workspaces(OceanSparkWorkspaces)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.oceanClusterId">oceanClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.logCollection">logCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.workspaces">workspaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | workspaces block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanClusterId`<sup>Required</sup> <a name="oceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.oceanClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.compute"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.ingress"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.logCollection"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.spark"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.webhook"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.workspaces"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

workspaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#workspaces OceanSpark#workspaces}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection">putLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces">putWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection">resetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook">resetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWorkspaces">resetWorkspaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute"></a>

```java
public void putCompute(OceanSparkCompute value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress"></a>

```java
public void putIngress(OceanSparkIngress value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `putLogCollection` <a name="putLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection"></a>

```java
public void putLogCollection(OceanSparkLogCollection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark"></a>

```java
public void putSpark(OceanSparkSpark value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook"></a>

```java
public void putWebhook(OceanSparkWebhook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `putWorkspaces` <a name="putWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces"></a>

```java
public void putWorkspaces(OceanSparkWorkspaces value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute"></a>

```java
public void resetCompute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId"></a>

```java
public void resetId()
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress"></a>

```java
public void resetIngress()
```

##### `resetLogCollection` <a name="resetLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection"></a>

```java
public void resetLogCollection()
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark"></a>

```java
public void resetSpark()
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook"></a>

```java
public void resetWebhook()
```

##### `resetWorkspaces` <a name="resetWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWorkspaces"></a>

```java
public void resetWorkspaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSpark;

OceanSpark.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSpark;

OceanSpark.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSpark;

OceanSpark.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSpark;

OceanSpark.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanSpark.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanSpark to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection">logCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspaces">workspaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference">OceanSparkWorkspacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput">computeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput">logCollectionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput">oceanClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput">webhookInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspacesInput">workspacesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId">oceanClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute"></a>

```java
public OceanSparkComputeOutputReference getCompute();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress"></a>

```java
public OceanSparkIngressOutputReference getIngress();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a>

---

##### `logCollection`<sup>Required</sup> <a name="logCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection"></a>

```java
public OceanSparkLogCollectionOutputReference getLogCollection();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark"></a>

```java
public OceanSparkSparkOutputReference getSpark();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook"></a>

```java
public OceanSparkWebhookOutputReference getWebhook();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a>

---

##### `workspaces`<sup>Required</sup> <a name="workspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspaces"></a>

```java
public OceanSparkWorkspacesOutputReference getWorkspaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference">OceanSparkWorkspacesOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput"></a>

```java
public OceanSparkCompute getComputeInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput"></a>

```java
public OceanSparkIngress getIngressInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `logCollectionInput`<sup>Optional</sup> <a name="logCollectionInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput"></a>

```java
public OceanSparkLogCollection getLogCollectionInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `oceanClusterIdInput`<sup>Optional</sup> <a name="oceanClusterIdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput"></a>

```java
public java.lang.String getOceanClusterIdInput();
```

- *Type:* java.lang.String

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput"></a>

```java
public OceanSparkSpark getSparkInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput"></a>

```java
public OceanSparkWebhook getWebhookInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `workspacesInput`<sup>Optional</sup> <a name="workspacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspacesInput"></a>

```java
public OceanSparkWorkspaces getWorkspacesInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oceanClusterId`<sup>Required</sup> <a name="oceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId"></a>

```java
public java.lang.String getOceanClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkCompute <a name="OceanSparkCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkCompute;

OceanSparkCompute.builder()
//  .createVngs(java.lang.Boolean)
//  .createVngs(IResolvable)
//  .useTaints(java.lang.Boolean)
//  .useTaints(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs">createVngs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints">useTaints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}. |

---

##### `createVngs`<sup>Optional</sup> <a name="createVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs"></a>

```java
public java.lang.Object getCreateVngs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

##### `useTaints`<sup>Optional</sup> <a name="useTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints"></a>

```java
public java.lang.Object getUseTaints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

### OceanSparkConfig <a name="OceanSparkConfig" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkConfig;

OceanSparkConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .oceanClusterId(java.lang.String)
//  .compute(OceanSparkCompute)
//  .id(java.lang.String)
//  .ingress(OceanSparkIngress)
//  .logCollection(OceanSparkLogCollection)
//  .spark(OceanSparkSpark)
//  .webhook(OceanSparkWebhook)
//  .workspaces(OceanSparkWorkspaces)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId">oceanClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection">logCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.workspaces">workspaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | workspaces block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanClusterId`<sup>Required</sup> <a name="oceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId"></a>

```java
public java.lang.String getOceanClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute"></a>

```java
public OceanSparkCompute getCompute();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress"></a>

```java
public OceanSparkIngress getIngress();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection"></a>

```java
public OceanSparkLogCollection getLogCollection();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark"></a>

```java
public OceanSparkSpark getSpark();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook"></a>

```java
public OceanSparkWebhook getWebhook();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.workspaces"></a>

```java
public OceanSparkWorkspaces getWorkspaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

workspaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#workspaces OceanSpark#workspaces}

---

### OceanSparkIngress <a name="OceanSparkIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngress;

OceanSparkIngress.builder()
//  .controller(OceanSparkIngressController)
//  .customEndpoint(OceanSparkIngressCustomEndpoint)
//  .loadBalancer(OceanSparkIngressLoadBalancer)
//  .privateLink(OceanSparkIngressPrivateLink)
//  .serviceAnnotations(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | controller block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations">serviceAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |

---

##### `controller`<sup>Optional</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller"></a>

```java
public OceanSparkIngressController getController();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#controller OceanSpark#controller}

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint"></a>

```java
public OceanSparkIngressCustomEndpoint getCustomEndpoint();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer"></a>

```java
public OceanSparkIngressLoadBalancer getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

##### `privateLink`<sup>Optional</sup> <a name="privateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink"></a>

```java
public OceanSparkIngressPrivateLink getPrivateLink();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

##### `serviceAnnotations`<sup>Optional</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

### OceanSparkIngressController <a name="OceanSparkIngressController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressController;

OceanSparkIngressController.builder()
//  .managed(java.lang.Boolean)
//  .managed(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

### OceanSparkIngressCustomEndpoint <a name="OceanSparkIngressCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressCustomEndpoint;

OceanSparkIngressCustomEndpoint.builder()
//  .address(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address">address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#address OceanSpark#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#address OceanSpark#address}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

### OceanSparkIngressLoadBalancer <a name="OceanSparkIngressLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressLoadBalancer;

OceanSparkIngressLoadBalancer.builder()
//  .managed(java.lang.Boolean)
//  .managed(IResolvable)
//  .serviceAnnotations(java.util.Map<java.lang.String, java.lang.String>)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations">serviceAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `serviceAnnotations`<sup>Optional</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

### OceanSparkIngressPrivateLink <a name="OceanSparkIngressPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressPrivateLink;

OceanSparkIngressPrivateLink.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .vpcEndpointService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService">vpcEndpointService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `vpcEndpointService`<sup>Optional</sup> <a name="vpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService"></a>

```java
public java.lang.String getVpcEndpointService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

### OceanSparkLogCollection <a name="OceanSparkLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkLogCollection;

OceanSparkLogCollection.builder()
//  .collectAppLogs(java.lang.Boolean)
//  .collectAppLogs(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs">collectAppLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}. |

---

##### `collectAppLogs`<sup>Optional</sup> <a name="collectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs"></a>

```java
public java.lang.Object getCollectAppLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

### OceanSparkSpark <a name="OceanSparkSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkSpark;

OceanSparkSpark.builder()
//  .additionalAppNamespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces">additionalAppNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}. |

---

##### `additionalAppNamespaces`<sup>Optional</sup> <a name="additionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces"></a>

```java
public java.util.List<java.lang.String> getAdditionalAppNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

### OceanSparkWebhook <a name="OceanSparkWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWebhook;

OceanSparkWebhook.builder()
//  .hostNetworkPorts(java.util.List<java.lang.Number>)
//  .useHostNetwork(java.lang.Boolean)
//  .useHostNetwork(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts">hostNetworkPorts</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork">useHostNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}. |

---

##### `hostNetworkPorts`<sup>Optional</sup> <a name="hostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts"></a>

```java
public java.util.List<java.lang.Number> getHostNetworkPorts();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

##### `useHostNetwork`<sup>Optional</sup> <a name="useHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork"></a>

```java
public java.lang.Object getUseHostNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

### OceanSparkWorkspaces <a name="OceanSparkWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspaces;

OceanSparkWorkspaces.builder()
//  .storage(OceanSparkWorkspacesStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | storage block. |

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.property.storage"></a>

```java
public OceanSparkWorkspacesStorage getStorage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#storage OceanSpark#storage}

---

### OceanSparkWorkspacesStorage <a name="OceanSparkWorkspacesStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspacesStorage;

OceanSparkWorkspacesStorage.builder()
//  .defaults(OceanSparkWorkspacesStorageDefaults)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | defaults block. |

---

##### `defaults`<sup>Optional</sup> <a name="defaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.property.defaults"></a>

```java
public OceanSparkWorkspacesStorageDefaults getDefaults();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#defaults OceanSpark#defaults}

---

### OceanSparkWorkspacesStorageDefaults <a name="OceanSparkWorkspacesStorageDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspacesStorageDefaults;

OceanSparkWorkspacesStorageDefaults.builder()
//  .storageClassName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | The name of the persistent volume storage class to use by default for new workspaces. |

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

The name of the persistent volume storage class to use by default for new workspaces.

Leave it empty to use the cluster defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_spark#storage_class_name OceanSpark#storage_class_name}

---

## Classes <a name="Classes" id="Classes"></a>

### OceanSparkComputeOutputReference <a name="OceanSparkComputeOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkComputeOutputReference;

new OceanSparkComputeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs">resetCreateVngs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints">resetUseTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateVngs` <a name="resetCreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs"></a>

```java
public void resetCreateVngs()
```

##### `resetUseTaints` <a name="resetUseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints"></a>

```java
public void resetUseTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput">createVngsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput">useTaintsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs">createVngs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints">useTaints</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createVngsInput`<sup>Optional</sup> <a name="createVngsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput"></a>

```java
public java.lang.Object getCreateVngsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useTaintsInput`<sup>Optional</sup> <a name="useTaintsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput"></a>

```java
public java.lang.Object getUseTaintsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createVngs`<sup>Required</sup> <a name="createVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs"></a>

```java
public java.lang.Object getCreateVngs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useTaints`<sup>Required</sup> <a name="useTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints"></a>

```java
public java.lang.Object getUseTaints();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue"></a>

```java
public OceanSparkCompute getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---


### OceanSparkIngressControllerOutputReference <a name="OceanSparkIngressControllerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressControllerOutputReference;

new OceanSparkIngressControllerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged">resetManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged"></a>

```java
public void resetManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput">managedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput"></a>

```java
public java.lang.Object getManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue"></a>

```java
public OceanSparkIngressController getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---


### OceanSparkIngressCustomEndpointOutputReference <a name="OceanSparkIngressCustomEndpointOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressCustomEndpointOutputReference;

new OceanSparkIngressCustomEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue"></a>

```java
public OceanSparkIngressCustomEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---


### OceanSparkIngressLoadBalancerOutputReference <a name="OceanSparkIngressLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressLoadBalancerOutputReference;

new OceanSparkIngressLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations">resetServiceAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetServiceAnnotations` <a name="resetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations"></a>

```java
public void resetServiceAnnotations()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput">managedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput">serviceAnnotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations">serviceAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput"></a>

```java
public java.lang.Object getManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAnnotationsInput`<sup>Optional</sup> <a name="serviceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAnnotations`<sup>Required</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue"></a>

```java
public OceanSparkIngressLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---


### OceanSparkIngressOutputReference <a name="OceanSparkIngressOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressOutputReference;

new OceanSparkIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController">putController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink">putPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController">resetController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink">resetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations">resetServiceAnnotations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putController` <a name="putController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController"></a>

```java
public void putController(OceanSparkIngressController value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint"></a>

```java
public void putCustomEndpoint(OceanSparkIngressCustomEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer"></a>

```java
public void putLoadBalancer(OceanSparkIngressLoadBalancer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `putPrivateLink` <a name="putPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink"></a>

```java
public void putPrivateLink(OceanSparkIngressPrivateLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `resetController` <a name="resetController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController"></a>

```java
public void resetController()
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetPrivateLink` <a name="resetPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink"></a>

```java
public void resetPrivateLink()
```

##### `resetServiceAnnotations` <a name="resetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations"></a>

```java
public void resetServiceAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput">controllerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput">privateLinkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput">serviceAnnotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations">serviceAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controller`<sup>Required</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller"></a>

```java
public OceanSparkIngressControllerOutputReference getController();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a>

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint"></a>

```java
public OceanSparkIngressCustomEndpointOutputReference getCustomEndpoint();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer"></a>

```java
public OceanSparkIngressLoadBalancerOutputReference getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a>

---

##### `privateLink`<sup>Required</sup> <a name="privateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink"></a>

```java
public OceanSparkIngressPrivateLinkOutputReference getPrivateLink();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a>

---

##### `controllerInput`<sup>Optional</sup> <a name="controllerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput"></a>

```java
public OceanSparkIngressController getControllerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput"></a>

```java
public OceanSparkIngressCustomEndpoint getCustomEndpointInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput"></a>

```java
public OceanSparkIngressLoadBalancer getLoadBalancerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `privateLinkInput`<sup>Optional</sup> <a name="privateLinkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput"></a>

```java
public OceanSparkIngressPrivateLink getPrivateLinkInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `serviceAnnotationsInput`<sup>Optional</sup> <a name="serviceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `serviceAnnotations`<sup>Required</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getServiceAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue"></a>

```java
public OceanSparkIngress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---


### OceanSparkIngressPrivateLinkOutputReference <a name="OceanSparkIngressPrivateLinkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkIngressPrivateLinkOutputReference;

new OceanSparkIngressPrivateLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService">resetVpcEndpointService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetVpcEndpointService` <a name="resetVpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService"></a>

```java
public void resetVpcEndpointService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput">vpcEndpointServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService">vpcEndpointService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcEndpointServiceInput`<sup>Optional</sup> <a name="vpcEndpointServiceInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput"></a>

```java
public java.lang.String getVpcEndpointServiceInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vpcEndpointService`<sup>Required</sup> <a name="vpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService"></a>

```java
public java.lang.String getVpcEndpointService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue"></a>

```java
public OceanSparkIngressPrivateLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---


### OceanSparkLogCollectionOutputReference <a name="OceanSparkLogCollectionOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkLogCollectionOutputReference;

new OceanSparkLogCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs">resetCollectAppLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCollectAppLogs` <a name="resetCollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs"></a>

```java
public void resetCollectAppLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput">collectAppLogsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs">collectAppLogs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectAppLogsInput`<sup>Optional</sup> <a name="collectAppLogsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput"></a>

```java
public java.lang.Object getCollectAppLogsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collectAppLogs`<sup>Required</sup> <a name="collectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs"></a>

```java
public java.lang.Object getCollectAppLogs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue"></a>

```java
public OceanSparkLogCollection getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---


### OceanSparkSparkOutputReference <a name="OceanSparkSparkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkSparkOutputReference;

new OceanSparkSparkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces">resetAdditionalAppNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalAppNamespaces` <a name="resetAdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces"></a>

```java
public void resetAdditionalAppNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput">additionalAppNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces">additionalAppNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalAppNamespacesInput`<sup>Optional</sup> <a name="additionalAppNamespacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalAppNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalAppNamespaces`<sup>Required</sup> <a name="additionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces"></a>

```java
public java.util.List<java.lang.String> getAdditionalAppNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue"></a>

```java
public OceanSparkSpark getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---


### OceanSparkWebhookOutputReference <a name="OceanSparkWebhookOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWebhookOutputReference;

new OceanSparkWebhookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts">resetHostNetworkPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork">resetUseHostNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostNetworkPorts` <a name="resetHostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts"></a>

```java
public void resetHostNetworkPorts()
```

##### `resetUseHostNetwork` <a name="resetUseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork"></a>

```java
public void resetUseHostNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput">hostNetworkPortsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput">useHostNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts">hostNetworkPorts</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork">useHostNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostNetworkPortsInput`<sup>Optional</sup> <a name="hostNetworkPortsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput"></a>

```java
public java.util.List<java.lang.Number> getHostNetworkPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `useHostNetworkInput`<sup>Optional</sup> <a name="useHostNetworkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput"></a>

```java
public java.lang.Object getUseHostNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostNetworkPorts`<sup>Required</sup> <a name="hostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts"></a>

```java
public java.util.List<java.lang.Number> getHostNetworkPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `useHostNetwork`<sup>Required</sup> <a name="useHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork"></a>

```java
public java.lang.Object getUseHostNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue"></a>

```java
public OceanSparkWebhook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---


### OceanSparkWorkspacesOutputReference <a name="OceanSparkWorkspacesOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspacesOutputReference;

new OceanSparkWorkspacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStorage` <a name="putStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage"></a>

```java
public void putStorage(OceanSparkWorkspacesStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resetStorage"></a>

```java
public void resetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference">OceanSparkWorkspacesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storageInput">storageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storage"></a>

```java
public OceanSparkWorkspacesStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference">OceanSparkWorkspacesStorageOutputReference</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storageInput"></a>

```java
public OceanSparkWorkspacesStorage getStorageInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.internalValue"></a>

```java
public OceanSparkWorkspaces getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---


### OceanSparkWorkspacesStorageDefaultsOutputReference <a name="OceanSparkWorkspacesStorageDefaultsOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspacesStorageDefaultsOutputReference;

new OceanSparkWorkspacesStorageDefaultsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resetStorageClassName"></a>

```java
public void resetStorageClassName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassNameInput"></a>

```java
public java.lang.String getStorageClassNameInput();
```

- *Type:* java.lang.String

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.internalValue"></a>

```java
public OceanSparkWorkspacesStorageDefaults getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---


### OceanSparkWorkspacesStorageOutputReference <a name="OceanSparkWorkspacesStorageOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark.OceanSparkWorkspacesStorageOutputReference;

new OceanSparkWorkspacesStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults">putDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resetDefaults">resetDefaults</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaults` <a name="putDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults"></a>

```java
public void putDefaults(OceanSparkWorkspacesStorageDefaults value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---

##### `resetDefaults` <a name="resetDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resetDefaults"></a>

```java
public void resetDefaults()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaults">defaults</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference">OceanSparkWorkspacesStorageDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaultsInput">defaultsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaults`<sup>Required</sup> <a name="defaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaults"></a>

```java
public OceanSparkWorkspacesStorageDefaultsOutputReference getDefaults();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference">OceanSparkWorkspacesStorageDefaultsOutputReference</a>

---

##### `defaultsInput`<sup>Optional</sup> <a name="defaultsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaultsInput"></a>

```java
public OceanSparkWorkspacesStorageDefaults getDefaultsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.internalValue"></a>

```java
public OceanSparkWorkspacesStorage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---



