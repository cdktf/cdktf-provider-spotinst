# `oceanSparkVirtualNodeGroup` Submodule <a name="`oceanSparkVirtualNodeGroup` Submodule" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSparkVirtualNodeGroup <a name="OceanSparkVirtualNodeGroup" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group spotinst_ocean_spark_virtual_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroup;

OceanSparkVirtualNodeGroup.Builder.create(Construct scope, java.lang.String id)
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
    .oceanSparkClusterId(java.lang.String)
    .virtualNodeGroupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.oceanSparkClusterId">oceanSparkClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.virtualNodeGroupId">virtualNodeGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanSparkClusterId`<sup>Required</sup> <a name="oceanSparkClusterId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.oceanSparkClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}.

---

##### `virtualNodeGroupId`<sup>Required</sup> <a name="virtualNodeGroupId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.virtualNodeGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSparkVirtualNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroup;

OceanSparkVirtualNodeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroup;

OceanSparkVirtualNodeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroup;

OceanSparkVirtualNodeGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroup;

OceanSparkVirtualNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanSparkVirtualNodeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanSparkVirtualNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanSparkVirtualNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanSparkVirtualNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanSparkVirtualNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterIdInput">oceanSparkClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupIdInput">virtualNodeGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterId">oceanSparkClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupId">virtualNodeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `oceanSparkClusterIdInput`<sup>Optional</sup> <a name="oceanSparkClusterIdInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterIdInput"></a>

```java
public java.lang.String getOceanSparkClusterIdInput();
```

- *Type:* java.lang.String

---

##### `virtualNodeGroupIdInput`<sup>Optional</sup> <a name="virtualNodeGroupIdInput" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupIdInput"></a>

```java
public java.lang.String getVirtualNodeGroupIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oceanSparkClusterId`<sup>Required</sup> <a name="oceanSparkClusterId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.oceanSparkClusterId"></a>

```java
public java.lang.String getOceanSparkClusterId();
```

- *Type:* java.lang.String

---

##### `virtualNodeGroupId`<sup>Required</sup> <a name="virtualNodeGroupId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.virtualNodeGroupId"></a>

```java
public java.lang.String getVirtualNodeGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkVirtualNodeGroupConfig <a name="OceanSparkVirtualNodeGroupConfig" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_spark_virtual_node_group.OceanSparkVirtualNodeGroupConfig;

OceanSparkVirtualNodeGroupConfig.builder()
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
    .oceanSparkClusterId(java.lang.String)
    .virtualNodeGroupId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.oceanSparkClusterId">oceanSparkClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.virtualNodeGroupId">virtualNodeGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `oceanSparkClusterId`<sup>Required</sup> <a name="oceanSparkClusterId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.oceanSparkClusterId"></a>

```java
public java.lang.String getOceanSparkClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}.

---

##### `virtualNodeGroupId`<sup>Required</sup> <a name="virtualNodeGroupId" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.virtualNodeGroupId"></a>

```java
public java.lang.String getVirtualNodeGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSparkVirtualNodeGroup.OceanSparkVirtualNodeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.171.3/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



