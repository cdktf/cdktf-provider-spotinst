# `oceancdRolloutSpec` Submodule <a name="`oceancdRolloutSpec` Submodule" id="@cdktf/provider-spotinst.oceancdRolloutSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdRolloutSpec <a name="OceancdRolloutSpec" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec spotinst_oceancd_rollout_spec}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpec;

OceancdRolloutSpec.Builder.create(Construct scope, java.lang.String id)
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
    .rolloutSpecName(java.lang.String)
    .strategy(OceancdRolloutSpecStrategy)
//  .failurePolicy(OceancdRolloutSpecFailurePolicy)
//  .id(java.lang.String)
//  .spotDeployment(OceancdRolloutSpecSpotDeployment)
//  .spotDeployments(IResolvable)
//  .spotDeployments(java.util.List<OceancdRolloutSpecSpotDeployments>)
//  .traffic(OceancdRolloutSpecTraffic)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.rolloutSpecName">rolloutSpecName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployment">spotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployments">spotDeployments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>></code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rolloutSpecName`<sup>Required</sup> <a name="rolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.rolloutSpecName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.strategy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.failurePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spotDeployment`<sup>Optional</sup> <a name="spotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployment"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `spotDeployments`<sup>Optional</sup> <a name="spotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.spotDeployments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>>

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.Initializer.parameter.traffic"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy">putFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment">putSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments">putSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic">putTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment">resetSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments">resetSpotDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic">resetTraffic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFailurePolicy` <a name="putFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy"></a>

```java
public void putFailurePolicy(OceancdRolloutSpecFailurePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `putSpotDeployment` <a name="putSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment"></a>

```java
public void putSpotDeployment(OceancdRolloutSpecSpotDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `putSpotDeployments` <a name="putSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments"></a>

```java
public void putSpotDeployments(IResolvable OR java.util.List<OceancdRolloutSpecSpotDeployments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putSpotDeployments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy"></a>

```java
public void putStrategy(OceancdRolloutSpecStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `putTraffic` <a name="putTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic"></a>

```java
public void putTraffic(OceancdRolloutSpecTraffic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.putTraffic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetFailurePolicy"></a>

```java
public void resetFailurePolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetId"></a>

```java
public void resetId()
```

##### `resetSpotDeployment` <a name="resetSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployment"></a>

```java
public void resetSpotDeployment()
```

##### `resetSpotDeployments` <a name="resetSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetSpotDeployments"></a>

```java
public void resetSpotDeployments()
```

##### `resetTraffic` <a name="resetTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.resetTraffic"></a>

```java
public void resetTraffic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpec;

OceancdRolloutSpec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpec;

OceancdRolloutSpec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpec;

OceancdRolloutSpec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpec;

OceancdRolloutSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceancdRolloutSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceancdRolloutSpec resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceancdRolloutSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceancdRolloutSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceancdRolloutSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment">spotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments">spotDeployments</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput">rolloutSpecNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput">spotDeploymentInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput">spotDeploymentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput">strategyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput">trafficInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName">rolloutSpecName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicy"></a>

```java
public OceancdRolloutSpecFailurePolicyOutputReference getFailurePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference">OceancdRolloutSpecFailurePolicyOutputReference</a>

---

##### `spotDeployment`<sup>Required</sup> <a name="spotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployment"></a>

```java
public OceancdRolloutSpecSpotDeploymentOutputReference getSpotDeployment();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference">OceancdRolloutSpecSpotDeploymentOutputReference</a>

---

##### `spotDeployments`<sup>Required</sup> <a name="spotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeployments"></a>

```java
public OceancdRolloutSpecSpotDeploymentsList getSpotDeployments();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList">OceancdRolloutSpecSpotDeploymentsList</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategy"></a>

```java
public OceancdRolloutSpecStrategyOutputReference getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference">OceancdRolloutSpecStrategyOutputReference</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.traffic"></a>

```java
public OceancdRolloutSpecTrafficOutputReference getTraffic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference">OceancdRolloutSpecTrafficOutputReference</a>

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.failurePolicyInput"></a>

```java
public OceancdRolloutSpecFailurePolicy getFailurePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `rolloutSpecNameInput`<sup>Optional</sup> <a name="rolloutSpecNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecNameInput"></a>

```java
public java.lang.String getRolloutSpecNameInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentInput`<sup>Optional</sup> <a name="spotDeploymentInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentInput"></a>

```java
public OceancdRolloutSpecSpotDeployment getSpotDeploymentInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---

##### `spotDeploymentsInput`<sup>Optional</sup> <a name="spotDeploymentsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.spotDeploymentsInput"></a>

```java
public java.lang.Object getSpotDeploymentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>>

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.strategyInput"></a>

```java
public OceancdRolloutSpecStrategy getStrategyInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---

##### `trafficInput`<sup>Optional</sup> <a name="trafficInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.trafficInput"></a>

```java
public OceancdRolloutSpecTraffic getTrafficInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rolloutSpecName`<sup>Required</sup> <a name="rolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.rolloutSpecName"></a>

```java
public java.lang.String getRolloutSpecName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdRolloutSpecConfig <a name="OceancdRolloutSpecConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecConfig;

OceancdRolloutSpecConfig.builder()
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
    .rolloutSpecName(java.lang.String)
    .strategy(OceancdRolloutSpecStrategy)
//  .failurePolicy(OceancdRolloutSpecFailurePolicy)
//  .id(java.lang.String)
//  .spotDeployment(OceancdRolloutSpecSpotDeployment)
//  .spotDeployments(IResolvable)
//  .spotDeployments(java.util.List<OceancdRolloutSpecSpotDeployments>)
//  .traffic(OceancdRolloutSpecTraffic)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName">rolloutSpecName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | failure_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment">spotDeployment</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | spot_deployment block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments">spotDeployments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>></code> | spot_deployments block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | traffic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `rolloutSpecName`<sup>Required</sup> <a name="rolloutSpecName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.rolloutSpecName"></a>

```java
public java.lang.String getRolloutSpecName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#rollout_spec_name OceancdRolloutSpec#rollout_spec_name}.

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.strategy"></a>

```java
public OceancdRolloutSpecStrategy getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#strategy OceancdRolloutSpec#strategy}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.failurePolicy"></a>

```java
public OceancdRolloutSpecFailurePolicy getFailurePolicy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#failure_policy OceancdRolloutSpec#failure_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#id OceancdRolloutSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spotDeployment`<sup>Optional</sup> <a name="spotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployment"></a>

```java
public OceancdRolloutSpecSpotDeployment getSpotDeployment();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

spot_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment OceancdRolloutSpec#spot_deployment}

---

##### `spotDeployments`<sup>Optional</sup> <a name="spotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.spotDeployments"></a>

```java
public java.lang.Object getSpotDeployments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>>

spot_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments OceancdRolloutSpec#spot_deployments}

---

##### `traffic`<sup>Optional</sup> <a name="traffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecConfig.property.traffic"></a>

```java
public OceancdRolloutSpecTraffic getTraffic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

traffic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#traffic OceancdRolloutSpec#traffic}

---

### OceancdRolloutSpecFailurePolicy <a name="OceancdRolloutSpecFailurePolicy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecFailurePolicy;

OceancdRolloutSpecFailurePolicy.builder()
    .action(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#action OceancdRolloutSpec#action}.

---

### OceancdRolloutSpecSpotDeployment <a name="OceancdRolloutSpecSpotDeployment" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecSpotDeployment;

OceancdRolloutSpecSpotDeployment.builder()
//  .spotDeploymentClusterId(java.lang.String)
//  .spotDeploymentName(java.lang.String)
//  .spotDeploymentNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId">spotDeploymentClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName">spotDeploymentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace">spotDeploymentNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}. |

---

##### `spotDeploymentClusterId`<sup>Optional</sup> <a name="spotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentClusterId"></a>

```java
public java.lang.String getSpotDeploymentClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_cluster_id OceancdRolloutSpec#spot_deployment_cluster_id}.

---

##### `spotDeploymentName`<sup>Optional</sup> <a name="spotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentName"></a>

```java
public java.lang.String getSpotDeploymentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_name OceancdRolloutSpec#spot_deployment_name}.

---

##### `spotDeploymentNamespace`<sup>Optional</sup> <a name="spotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment.property.spotDeploymentNamespace"></a>

```java
public java.lang.String getSpotDeploymentNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployment_namespace OceancdRolloutSpec#spot_deployment_namespace}.

---

### OceancdRolloutSpecSpotDeployments <a name="OceancdRolloutSpecSpotDeployments" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecSpotDeployments;

OceancdRolloutSpecSpotDeployments.builder()
//  .spotDeploymentsClusterId(java.lang.String)
//  .spotDeploymentsName(java.lang.String)
//  .spotDeploymentsNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId">spotDeploymentsClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName">spotDeploymentsName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace">spotDeploymentsNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}. |

---

##### `spotDeploymentsClusterId`<sup>Optional</sup> <a name="spotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsClusterId"></a>

```java
public java.lang.String getSpotDeploymentsClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_cluster_id OceancdRolloutSpec#spot_deployments_cluster_id}.

---

##### `spotDeploymentsName`<sup>Optional</sup> <a name="spotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsName"></a>

```java
public java.lang.String getSpotDeploymentsName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_name OceancdRolloutSpec#spot_deployments_name}.

---

##### `spotDeploymentsNamespace`<sup>Optional</sup> <a name="spotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments.property.spotDeploymentsNamespace"></a>

```java
public java.lang.String getSpotDeploymentsNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#spot_deployments_namespace OceancdRolloutSpec#spot_deployments_namespace}.

---

### OceancdRolloutSpecStrategy <a name="OceancdRolloutSpecStrategy" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategy;

OceancdRolloutSpecStrategy.builder()
    .strategyName(java.lang.String)
//  .args(IResolvable)
//  .args(java.util.List<OceancdRolloutSpecStrategyArgs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName">strategyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args">args</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>></code> | args block. |

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.strategyName"></a>

```java
public java.lang.String getStrategyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#strategy_name OceancdRolloutSpec#strategy_name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy.property.args"></a>

```java
public java.lang.Object getArgs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>>

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#args OceancdRolloutSpec#args}

---

### OceancdRolloutSpecStrategyArgs <a name="OceancdRolloutSpecStrategyArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgs;

OceancdRolloutSpecStrategyArgs.builder()
    .argName(java.lang.String)
//  .argValue(java.lang.String)
//  .valueFrom(OceancdRolloutSpecStrategyArgsValueFrom)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName">argName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue">argValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | value_from block. |

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#arg_name OceancdRolloutSpec#arg_name}.

---

##### `argValue`<sup>Optional</sup> <a name="argValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.argValue"></a>

```java
public java.lang.String getArgValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#arg_value OceancdRolloutSpec#arg_value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs.property.valueFrom"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFrom getValueFrom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#value_from OceancdRolloutSpec#value_from}

---

### OceancdRolloutSpecStrategyArgsValueFrom <a name="OceancdRolloutSpecStrategyArgsValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsValueFrom;

OceancdRolloutSpecStrategyArgsValueFrom.builder()
    .fieldRef(OceancdRolloutSpecStrategyArgsValueFromFieldRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | field_ref block. |

---

##### `fieldRef`<sup>Required</sup> <a name="fieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom.property.fieldRef"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFromFieldRef getFieldRef();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

field_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#field_ref OceancdRolloutSpec#field_ref}

---

### OceancdRolloutSpecStrategyArgsValueFromFieldRef <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsValueFromFieldRef;

OceancdRolloutSpecStrategyArgsValueFromFieldRef.builder()
    .fieldPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}. |

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#field_path OceancdRolloutSpec#field_path}.

---

### OceancdRolloutSpecTraffic <a name="OceancdRolloutSpecTraffic" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTraffic;

OceancdRolloutSpecTraffic.builder()
//  .alb(OceancdRolloutSpecTrafficAlb)
//  .ambassador(OceancdRolloutSpecTrafficAmbassador)
//  .canaryService(java.lang.String)
//  .istio(OceancdRolloutSpecTrafficIstio)
//  .nginx(OceancdRolloutSpecTrafficNginx)
//  .pingPong(OceancdRolloutSpecTrafficPingPong)
//  .smi(OceancdRolloutSpecTrafficSmi)
//  .stableService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | alb block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | ambassador block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService">canaryService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | istio block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | nginx block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong">pingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | ping_pong block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | smi block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService">stableService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}. |

---

##### `alb`<sup>Optional</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.alb"></a>

```java
public OceancdRolloutSpecTrafficAlb getAlb();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

alb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb OceancdRolloutSpec#alb}

---

##### `ambassador`<sup>Optional</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.ambassador"></a>

```java
public OceancdRolloutSpecTrafficAmbassador getAmbassador();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

ambassador block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#ambassador OceancdRolloutSpec#ambassador}

---

##### `canaryService`<sup>Optional</sup> <a name="canaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.canaryService"></a>

```java
public java.lang.String getCanaryService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_service OceancdRolloutSpec#canary_service}.

---

##### `istio`<sup>Optional</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.istio"></a>

```java
public OceancdRolloutSpecTrafficIstio getIstio();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

istio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#istio OceancdRolloutSpec#istio}

---

##### `nginx`<sup>Optional</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.nginx"></a>

```java
public OceancdRolloutSpecTrafficNginx getNginx();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

nginx block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#nginx OceancdRolloutSpec#nginx}

---

##### `pingPong`<sup>Optional</sup> <a name="pingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.pingPong"></a>

```java
public OceancdRolloutSpecTrafficPingPong getPingPong();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

ping_pong block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#ping_pong OceancdRolloutSpec#ping_pong}

---

##### `smi`<sup>Optional</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.smi"></a>

```java
public OceancdRolloutSpecTrafficSmi getSmi();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

smi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#smi OceancdRolloutSpec#smi}

---

##### `stableService`<sup>Optional</sup> <a name="stableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic.property.stableService"></a>

```java
public java.lang.String getStableService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_service OceancdRolloutSpec#stable_service}.

---

### OceancdRolloutSpecTrafficAlb <a name="OceancdRolloutSpecTrafficAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAlb;

OceancdRolloutSpecTrafficAlb.builder()
    .albIngress(java.lang.String)
    .albRootService(java.lang.String)
    .servicePort(java.lang.Number)
//  .albAnnotationPrefix(java.lang.String)
//  .stickinessConfig(OceancdRolloutSpecTrafficAlbStickinessConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress">albIngress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService">albRootService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort">servicePort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix">albAnnotationPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig">stickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | stickiness_config block. |

---

##### `albIngress`<sup>Required</sup> <a name="albIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albIngress"></a>

```java
public java.lang.String getAlbIngress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_ingress OceancdRolloutSpec#alb_ingress}.

---

##### `albRootService`<sup>Required</sup> <a name="albRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albRootService"></a>

```java
public java.lang.String getAlbRootService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_root_service OceancdRolloutSpec#alb_root_service}.

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.servicePort"></a>

```java
public java.lang.Number getServicePort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#service_port OceancdRolloutSpec#service_port}.

---

##### `albAnnotationPrefix`<sup>Optional</sup> <a name="albAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.albAnnotationPrefix"></a>

```java
public java.lang.String getAlbAnnotationPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#alb_annotation_prefix OceancdRolloutSpec#alb_annotation_prefix}.

---

##### `stickinessConfig`<sup>Optional</sup> <a name="stickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb.property.stickinessConfig"></a>

```java
public OceancdRolloutSpecTrafficAlbStickinessConfig getStickinessConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

stickiness_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stickiness_config OceancdRolloutSpec#stickiness_config}

---

### OceancdRolloutSpecTrafficAlbStickinessConfig <a name="OceancdRolloutSpecTrafficAlbStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAlbStickinessConfig;

OceancdRolloutSpecTrafficAlbStickinessConfig.builder()
//  .durationSeconds(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#duration_seconds OceancdRolloutSpec#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#enabled OceancdRolloutSpec#enabled}.

---

### OceancdRolloutSpecTrafficAmbassador <a name="OceancdRolloutSpecTrafficAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAmbassador;

OceancdRolloutSpecTrafficAmbassador.builder()
    .mappings(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings">mappings</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador.property.mappings"></a>

```java
public java.util.List<java.lang.String> getMappings();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#mappings OceancdRolloutSpec#mappings}.

---

### OceancdRolloutSpecTrafficIstio <a name="OceancdRolloutSpecTrafficIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstio;

OceancdRolloutSpecTrafficIstio.builder()
    .virtualServices(IResolvable)
    .virtualServices(java.util.List<OceancdRolloutSpecTrafficIstioVirtualServices>)
//  .destinationRule(OceancdRolloutSpecTrafficIstioDestinationRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices">virtualServices</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>></code> | virtual_services block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule">destinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | destination_rule block. |

---

##### `virtualServices`<sup>Required</sup> <a name="virtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.virtualServices"></a>

```java
public java.lang.Object getVirtualServices();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>>

virtual_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#virtual_services OceancdRolloutSpec#virtual_services}

---

##### `destinationRule`<sup>Optional</sup> <a name="destinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio.property.destinationRule"></a>

```java
public OceancdRolloutSpecTrafficIstioDestinationRule getDestinationRule();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

destination_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#destination_rule OceancdRolloutSpec#destination_rule}

---

### OceancdRolloutSpecTrafficIstioDestinationRule <a name="OceancdRolloutSpecTrafficIstioDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioDestinationRule;

OceancdRolloutSpecTrafficIstioDestinationRule.builder()
    .canarySubsetName(java.lang.String)
    .destinationRuleName(java.lang.String)
    .stableSubsetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName">canarySubsetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName">destinationRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName">stableSubsetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}. |

---

##### `canarySubsetName`<sup>Required</sup> <a name="canarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.canarySubsetName"></a>

```java
public java.lang.String getCanarySubsetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_subset_name OceancdRolloutSpec#canary_subset_name}.

---

##### `destinationRuleName`<sup>Required</sup> <a name="destinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.destinationRuleName"></a>

```java
public java.lang.String getDestinationRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#destination_rule_name OceancdRolloutSpec#destination_rule_name}.

---

##### `stableSubsetName`<sup>Required</sup> <a name="stableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule.property.stableSubsetName"></a>

```java
public java.lang.String getStableSubsetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_subset_name OceancdRolloutSpec#stable_subset_name}.

---

### OceancdRolloutSpecTrafficIstioVirtualServices <a name="OceancdRolloutSpecTrafficIstioVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServices;

OceancdRolloutSpecTrafficIstioVirtualServices.builder()
    .virtualServiceName(java.lang.String)
//  .tlsRoutes(IResolvable)
//  .tlsRoutes(java.util.List<OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes>)
//  .virtualServiceRoutes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes">tlsRoutes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>></code> | tls_routes block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes">virtualServiceRoutes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}. |

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#virtual_service_name OceancdRolloutSpec#virtual_service_name}.

---

##### `tlsRoutes`<sup>Optional</sup> <a name="tlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.tlsRoutes"></a>

```java
public java.lang.Object getTlsRoutes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>>

tls_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#tls_routes OceancdRolloutSpec#tls_routes}

---

##### `virtualServiceRoutes`<sup>Optional</sup> <a name="virtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices.property.virtualServiceRoutes"></a>

```java
public java.util.List<java.lang.String> getVirtualServiceRoutes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#virtual_service_routes OceancdRolloutSpec#virtual_service_routes}.

---

### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes;

OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.builder()
//  .port(java.lang.Number)
//  .sniHosts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts">sniHosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#port OceancdRolloutSpec#port}.

---

##### `sniHosts`<sup>Optional</sup> <a name="sniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes.property.sniHosts"></a>

```java
public java.util.List<java.lang.String> getSniHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#sni_hosts OceancdRolloutSpec#sni_hosts}.

---

### OceancdRolloutSpecTrafficNginx <a name="OceancdRolloutSpecTrafficNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficNginx;

OceancdRolloutSpecTrafficNginx.builder()
    .stableIngress(java.lang.String)
//  .additionalIngressAnnotation(OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation)
//  .nginxAnnotationPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress">stableIngress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation">additionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | additional_ingress_annotation block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix">nginxAnnotationPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}. |

---

##### `stableIngress`<sup>Required</sup> <a name="stableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.stableIngress"></a>

```java
public java.lang.String getStableIngress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#stable_ingress OceancdRolloutSpec#stable_ingress}.

---

##### `additionalIngressAnnotation`<sup>Optional</sup> <a name="additionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.additionalIngressAnnotation"></a>

```java
public OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation getAdditionalIngressAnnotation();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

additional_ingress_annotation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#additional_ingress_annotation OceancdRolloutSpec#additional_ingress_annotation}

---

##### `nginxAnnotationPrefix`<sup>Optional</sup> <a name="nginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx.property.nginxAnnotationPrefix"></a>

```java
public java.lang.String getNginxAnnotationPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#nginx_annotation_prefix OceancdRolloutSpec#nginx_annotation_prefix}.

---

### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation;

OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.builder()
//  .canaryByHeader(java.lang.String)
//  .key1(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader">canaryByHeader</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1">key1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}. |

---

##### `canaryByHeader`<sup>Optional</sup> <a name="canaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.canaryByHeader"></a>

```java
public java.lang.String getCanaryByHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#canary_by_header OceancdRolloutSpec#canary_by_header}.

---

##### `key1`<sup>Optional</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation.property.key1"></a>

```java
public java.lang.String getKey1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#key1 OceancdRolloutSpec#key1}.

---

### OceancdRolloutSpecTrafficPingPong <a name="OceancdRolloutSpecTrafficPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficPingPong;

OceancdRolloutSpecTrafficPingPong.builder()
    .pingService(java.lang.String)
    .pongService(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService">pingService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService">pongService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}. |

---

##### `pingService`<sup>Required</sup> <a name="pingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pingService"></a>

```java
public java.lang.String getPingService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#ping_service OceancdRolloutSpec#ping_service}.

---

##### `pongService`<sup>Required</sup> <a name="pongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong.property.pongService"></a>

```java
public java.lang.String getPongService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#pong_service OceancdRolloutSpec#pong_service}.

---

### OceancdRolloutSpecTrafficSmi <a name="OceancdRolloutSpecTrafficSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficSmi;

OceancdRolloutSpecTrafficSmi.builder()
//  .smiRootService(java.lang.String)
//  .trafficSplitName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService">smiRootService</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName">trafficSplitName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}. |

---

##### `smiRootService`<sup>Optional</sup> <a name="smiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.smiRootService"></a>

```java
public java.lang.String getSmiRootService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#smi_root_service OceancdRolloutSpec#smi_root_service}.

---

##### `trafficSplitName`<sup>Optional</sup> <a name="trafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi.property.trafficSplitName"></a>

```java
public java.lang.String getTrafficSplitName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.3/docs/resources/oceancd_rollout_spec#traffic_split_name OceancdRolloutSpec#traffic_split_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdRolloutSpecFailurePolicyOutputReference <a name="OceancdRolloutSpecFailurePolicyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecFailurePolicyOutputReference;

new OceancdRolloutSpecFailurePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicyOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecFailurePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecFailurePolicy">OceancdRolloutSpecFailurePolicy</a>

---


### OceancdRolloutSpecSpotDeploymentOutputReference <a name="OceancdRolloutSpecSpotDeploymentOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecSpotDeploymentOutputReference;

new OceancdRolloutSpecSpotDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId">resetSpotDeploymentClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName">resetSpotDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace">resetSpotDeploymentNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpotDeploymentClusterId` <a name="resetSpotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentClusterId"></a>

```java
public void resetSpotDeploymentClusterId()
```

##### `resetSpotDeploymentName` <a name="resetSpotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentName"></a>

```java
public void resetSpotDeploymentName()
```

##### `resetSpotDeploymentNamespace` <a name="resetSpotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.resetSpotDeploymentNamespace"></a>

```java
public void resetSpotDeploymentNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput">spotDeploymentClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput">spotDeploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput">spotDeploymentNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId">spotDeploymentClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName">spotDeploymentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace">spotDeploymentNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spotDeploymentClusterIdInput`<sup>Optional</sup> <a name="spotDeploymentClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterIdInput"></a>

```java
public java.lang.String getSpotDeploymentClusterIdInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentNameInput`<sup>Optional</sup> <a name="spotDeploymentNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNameInput"></a>

```java
public java.lang.String getSpotDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentNamespaceInput`<sup>Optional</sup> <a name="spotDeploymentNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespaceInput"></a>

```java
public java.lang.String getSpotDeploymentNamespaceInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentClusterId`<sup>Required</sup> <a name="spotDeploymentClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentClusterId"></a>

```java
public java.lang.String getSpotDeploymentClusterId();
```

- *Type:* java.lang.String

---

##### `spotDeploymentName`<sup>Required</sup> <a name="spotDeploymentName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentName"></a>

```java
public java.lang.String getSpotDeploymentName();
```

- *Type:* java.lang.String

---

##### `spotDeploymentNamespace`<sup>Required</sup> <a name="spotDeploymentNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.spotDeploymentNamespace"></a>

```java
public java.lang.String getSpotDeploymentNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecSpotDeployment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployment">OceancdRolloutSpecSpotDeployment</a>

---


### OceancdRolloutSpecSpotDeploymentsList <a name="OceancdRolloutSpecSpotDeploymentsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecSpotDeploymentsList;

new OceancdRolloutSpecSpotDeploymentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get"></a>

```java
public OceancdRolloutSpecSpotDeploymentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>>

---


### OceancdRolloutSpecSpotDeploymentsOutputReference <a name="OceancdRolloutSpecSpotDeploymentsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecSpotDeploymentsOutputReference;

new OceancdRolloutSpecSpotDeploymentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId">resetSpotDeploymentsClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName">resetSpotDeploymentsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace">resetSpotDeploymentsNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpotDeploymentsClusterId` <a name="resetSpotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsClusterId"></a>

```java
public void resetSpotDeploymentsClusterId()
```

##### `resetSpotDeploymentsName` <a name="resetSpotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsName"></a>

```java
public void resetSpotDeploymentsName()
```

##### `resetSpotDeploymentsNamespace` <a name="resetSpotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.resetSpotDeploymentsNamespace"></a>

```java
public void resetSpotDeploymentsNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput">spotDeploymentsClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput">spotDeploymentsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput">spotDeploymentsNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId">spotDeploymentsClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName">spotDeploymentsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace">spotDeploymentsNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsClusterIdInput`<sup>Optional</sup> <a name="spotDeploymentsClusterIdInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterIdInput"></a>

```java
public java.lang.String getSpotDeploymentsClusterIdInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsNameInput`<sup>Optional</sup> <a name="spotDeploymentsNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNameInput"></a>

```java
public java.lang.String getSpotDeploymentsNameInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsNamespaceInput`<sup>Optional</sup> <a name="spotDeploymentsNamespaceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespaceInput"></a>

```java
public java.lang.String getSpotDeploymentsNamespaceInput();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsClusterId`<sup>Required</sup> <a name="spotDeploymentsClusterId" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsClusterId"></a>

```java
public java.lang.String getSpotDeploymentsClusterId();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsName`<sup>Required</sup> <a name="spotDeploymentsName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsName"></a>

```java
public java.lang.String getSpotDeploymentsName();
```

- *Type:* java.lang.String

---

##### `spotDeploymentsNamespace`<sup>Required</sup> <a name="spotDeploymentsNamespace" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.spotDeploymentsNamespace"></a>

```java
public java.lang.String getSpotDeploymentsNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeploymentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecSpotDeployments">OceancdRolloutSpecSpotDeployments</a>

---


### OceancdRolloutSpecStrategyArgsList <a name="OceancdRolloutSpecStrategyArgsList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsList;

new OceancdRolloutSpecStrategyArgsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get"></a>

```java
public OceancdRolloutSpecStrategyArgsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>>

---


### OceancdRolloutSpecStrategyArgsOutputReference <a name="OceancdRolloutSpecStrategyArgsOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsOutputReference;

new OceancdRolloutSpecStrategyArgsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom">putValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue">resetArgValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueFrom` <a name="putValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom"></a>

```java
public void putValueFrom(OceancdRolloutSpecStrategyArgsValueFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `resetArgValue` <a name="resetArgValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetArgValue"></a>

```java
public void resetArgValue()
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.resetValueFrom"></a>

```java
public void resetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput">argNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput">argValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName">argName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue">argValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFrom"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFromOutputReference getValueFrom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference">OceancdRolloutSpecStrategyArgsValueFromOutputReference</a>

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argNameInput"></a>

```java
public java.lang.String getArgNameInput();
```

- *Type:* java.lang.String

---

##### `argValueInput`<sup>Optional</sup> <a name="argValueInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValueInput"></a>

```java
public java.lang.String getArgValueInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.valueFromInput"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFrom getValueFromInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

---

##### `argValue`<sup>Required</sup> <a name="argValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.argValue"></a>

```java
public java.lang.String getArgValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>

---


### OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference;

new OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFromFieldRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


### OceancdRolloutSpecStrategyArgsValueFromOutputReference <a name="OceancdRolloutSpecStrategyArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyArgsValueFromOutputReference;

new OceancdRolloutSpecStrategyArgsValueFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef">putFieldRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldRef` <a name="putFieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef"></a>

```java
public void putFieldRef(OceancdRolloutSpecStrategyArgsValueFromFieldRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.putFieldRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef">fieldRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput">fieldRefInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldRef`<sup>Required</sup> <a name="fieldRef" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRef"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference getFieldRef();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference">OceancdRolloutSpecStrategyArgsValueFromFieldRefOutputReference</a>

---

##### `fieldRefInput`<sup>Optional</sup> <a name="fieldRefInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.fieldRefInput"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFromFieldRef getFieldRefInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromFieldRef">OceancdRolloutSpecStrategyArgsValueFromFieldRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFromOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecStrategyArgsValueFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsValueFrom">OceancdRolloutSpecStrategyArgsValueFrom</a>

---


### OceancdRolloutSpecStrategyOutputReference <a name="OceancdRolloutSpecStrategyOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecStrategyOutputReference;

new OceancdRolloutSpecStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs">putArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArgs` <a name="putArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs"></a>

```java
public void putArgs(IResolvable OR java.util.List<OceancdRolloutSpecStrategyArgs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.putArgs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>>

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput">argsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput">strategyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName">strategyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.args"></a>

```java
public OceancdRolloutSpecStrategyArgsList getArgs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgsList">OceancdRolloutSpecStrategyArgsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.argsInput"></a>

```java
public java.lang.Object getArgsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyArgs">OceancdRolloutSpecStrategyArgs</a>>

---

##### `strategyNameInput`<sup>Optional</sup> <a name="strategyNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyNameInput"></a>

```java
public java.lang.String getStrategyNameInput();
```

- *Type:* java.lang.String

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.strategyName"></a>

```java
public java.lang.String getStrategyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategyOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecStrategy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecStrategy">OceancdRolloutSpecStrategy</a>

---


### OceancdRolloutSpecTrafficAlbOutputReference <a name="OceancdRolloutSpecTrafficAlbOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAlbOutputReference;

new OceancdRolloutSpecTrafficAlbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig">putStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix">resetAlbAnnotationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig">resetStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickinessConfig` <a name="putStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig"></a>

```java
public void putStickinessConfig(OceancdRolloutSpecTrafficAlbStickinessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.putStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `resetAlbAnnotationPrefix` <a name="resetAlbAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetAlbAnnotationPrefix"></a>

```java
public void resetAlbAnnotationPrefix()
```

##### `resetStickinessConfig` <a name="resetStickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.resetStickinessConfig"></a>

```java
public void resetStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig">stickinessConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput">albAnnotationPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput">albIngressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput">albRootServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput">servicePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput">stickinessConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix">albAnnotationPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress">albIngress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService">albRootService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort">servicePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stickinessConfig`<sup>Required</sup> <a name="stickinessConfig" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfig"></a>

```java
public OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference getStickinessConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference">OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference</a>

---

##### `albAnnotationPrefixInput`<sup>Optional</sup> <a name="albAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefixInput"></a>

```java
public java.lang.String getAlbAnnotationPrefixInput();
```

- *Type:* java.lang.String

---

##### `albIngressInput`<sup>Optional</sup> <a name="albIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngressInput"></a>

```java
public java.lang.String getAlbIngressInput();
```

- *Type:* java.lang.String

---

##### `albRootServiceInput`<sup>Optional</sup> <a name="albRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootServiceInput"></a>

```java
public java.lang.String getAlbRootServiceInput();
```

- *Type:* java.lang.String

---

##### `servicePortInput`<sup>Optional</sup> <a name="servicePortInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePortInput"></a>

```java
public java.lang.Number getServicePortInput();
```

- *Type:* java.lang.Number

---

##### `stickinessConfigInput`<sup>Optional</sup> <a name="stickinessConfigInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.stickinessConfigInput"></a>

```java
public OceancdRolloutSpecTrafficAlbStickinessConfig getStickinessConfigInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---

##### `albAnnotationPrefix`<sup>Required</sup> <a name="albAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albAnnotationPrefix"></a>

```java
public java.lang.String getAlbAnnotationPrefix();
```

- *Type:* java.lang.String

---

##### `albIngress`<sup>Required</sup> <a name="albIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albIngress"></a>

```java
public java.lang.String getAlbIngress();
```

- *Type:* java.lang.String

---

##### `albRootService`<sup>Required</sup> <a name="albRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.albRootService"></a>

```java
public java.lang.String getAlbRootService();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.servicePort"></a>

```java
public java.lang.Number getServicePort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficAlb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---


### OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference <a name="OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference;

new OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfigOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficAlbStickinessConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbStickinessConfig">OceancdRolloutSpecTrafficAlbStickinessConfig</a>

---


### OceancdRolloutSpecTrafficAmbassadorOutputReference <a name="OceancdRolloutSpecTrafficAmbassadorOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficAmbassadorOutputReference;

new OceancdRolloutSpecTrafficAmbassadorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput">mappingsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings">mappings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mappingsInput`<sup>Optional</sup> <a name="mappingsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappingsInput"></a>

```java
public java.util.List<java.lang.String> getMappingsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.mappings"></a>

```java
public java.util.List<java.lang.String> getMappings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficAmbassador getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---


### OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference <a name="OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference;

new OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput">canarySubsetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput">destinationRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput">stableSubsetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName">canarySubsetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName">destinationRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName">stableSubsetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canarySubsetNameInput`<sup>Optional</sup> <a name="canarySubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetNameInput"></a>

```java
public java.lang.String getCanarySubsetNameInput();
```

- *Type:* java.lang.String

---

##### `destinationRuleNameInput`<sup>Optional</sup> <a name="destinationRuleNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleNameInput"></a>

```java
public java.lang.String getDestinationRuleNameInput();
```

- *Type:* java.lang.String

---

##### `stableSubsetNameInput`<sup>Optional</sup> <a name="stableSubsetNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetNameInput"></a>

```java
public java.lang.String getStableSubsetNameInput();
```

- *Type:* java.lang.String

---

##### `canarySubsetName`<sup>Required</sup> <a name="canarySubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.canarySubsetName"></a>

```java
public java.lang.String getCanarySubsetName();
```

- *Type:* java.lang.String

---

##### `destinationRuleName`<sup>Required</sup> <a name="destinationRuleName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.destinationRuleName"></a>

```java
public java.lang.String getDestinationRuleName();
```

- *Type:* java.lang.String

---

##### `stableSubsetName`<sup>Required</sup> <a name="stableSubsetName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.stableSubsetName"></a>

```java
public java.lang.String getStableSubsetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficIstioDestinationRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---


### OceancdRolloutSpecTrafficIstioOutputReference <a name="OceancdRolloutSpecTrafficIstioOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioOutputReference;

new OceancdRolloutSpecTrafficIstioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule">putDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices">putVirtualServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule">resetDestinationRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationRule` <a name="putDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule"></a>

```java
public void putDestinationRule(OceancdRolloutSpecTrafficIstioDestinationRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putDestinationRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `putVirtualServices` <a name="putVirtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices"></a>

```java
public void putVirtualServices(IResolvable OR java.util.List<OceancdRolloutSpecTrafficIstioVirtualServices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.putVirtualServices.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>>

---

##### `resetDestinationRule` <a name="resetDestinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.resetDestinationRule"></a>

```java
public void resetDestinationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule">destinationRule</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices">virtualServices</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput">destinationRuleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput">virtualServicesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationRule`<sup>Required</sup> <a name="destinationRule" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRule"></a>

```java
public OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference getDestinationRule();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference">OceancdRolloutSpecTrafficIstioDestinationRuleOutputReference</a>

---

##### `virtualServices`<sup>Required</sup> <a name="virtualServices" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServices"></a>

```java
public OceancdRolloutSpecTrafficIstioVirtualServicesList getVirtualServices();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList">OceancdRolloutSpecTrafficIstioVirtualServicesList</a>

---

##### `destinationRuleInput`<sup>Optional</sup> <a name="destinationRuleInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.destinationRuleInput"></a>

```java
public OceancdRolloutSpecTrafficIstioDestinationRule getDestinationRuleInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioDestinationRule">OceancdRolloutSpecTrafficIstioDestinationRule</a>

---

##### `virtualServicesInput`<sup>Optional</sup> <a name="virtualServicesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.virtualServicesInput"></a>

```java
public java.lang.Object getVirtualServicesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficIstio getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServicesList;

new OceancdRolloutSpecTrafficIstioVirtualServicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get"></a>

```java
public OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference;

new OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes">putTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes">resetTlsRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes">resetVirtualServiceRoutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsRoutes` <a name="putTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes"></a>

```java
public void putTlsRoutes(IResolvable OR java.util.List<OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.putTlsRoutes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>>

---

##### `resetTlsRoutes` <a name="resetTlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetTlsRoutes"></a>

```java
public void resetTlsRoutes()
```

##### `resetVirtualServiceRoutes` <a name="resetVirtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.resetVirtualServiceRoutes"></a>

```java
public void resetVirtualServiceRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes">tlsRoutes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput">tlsRoutesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput">virtualServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput">virtualServiceRoutesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName">virtualServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes">virtualServiceRoutes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tlsRoutes`<sup>Required</sup> <a name="tlsRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutes"></a>

```java
public OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList getTlsRoutes();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList</a>

---

##### `tlsRoutesInput`<sup>Optional</sup> <a name="tlsRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.tlsRoutesInput"></a>

```java
public java.lang.Object getTlsRoutesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>>

---

##### `virtualServiceNameInput`<sup>Optional</sup> <a name="virtualServiceNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceNameInput"></a>

```java
public java.lang.String getVirtualServiceNameInput();
```

- *Type:* java.lang.String

---

##### `virtualServiceRoutesInput`<sup>Optional</sup> <a name="virtualServiceRoutesInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutesInput"></a>

```java
public java.util.List<java.lang.String> getVirtualServiceRoutesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualServiceName`<sup>Required</sup> <a name="virtualServiceName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceName"></a>

```java
public java.lang.String getVirtualServiceName();
```

- *Type:* java.lang.String

---

##### `virtualServiceRoutes`<sup>Required</sup> <a name="virtualServiceRoutes" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.virtualServiceRoutes"></a>

```java
public java.util.List<java.lang.String> getVirtualServiceRoutes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServices">OceancdRolloutSpecTrafficIstioVirtualServices</a>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList;

new OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get"></a>

```java
public OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>>

---


### OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference <a name="OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference;

new OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts">resetSniHosts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSniHosts` <a name="resetSniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.resetSniHosts"></a>

```java
public void resetSniHosts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput">sniHostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts">sniHosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `sniHostsInput`<sup>Optional</sup> <a name="sniHostsInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHostsInput"></a>

```java
public java.util.List<java.lang.String> getSniHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `sniHosts`<sup>Required</sup> <a name="sniHosts" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.sniHosts"></a>

```java
public java.util.List<java.lang.String> getSniHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes">OceancdRolloutSpecTrafficIstioVirtualServicesTlsRoutes</a>

---


### OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference <a name="OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference;

new OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader">resetCanaryByHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1">resetKey1</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCanaryByHeader` <a name="resetCanaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetCanaryByHeader"></a>

```java
public void resetCanaryByHeader()
```

##### `resetKey1` <a name="resetKey1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.resetKey1"></a>

```java
public void resetKey1()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput">canaryByHeaderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input">key1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader">canaryByHeader</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1">key1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `canaryByHeaderInput`<sup>Optional</sup> <a name="canaryByHeaderInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeaderInput"></a>

```java
public java.lang.String getCanaryByHeaderInput();
```

- *Type:* java.lang.String

---

##### `key1Input`<sup>Optional</sup> <a name="key1Input" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1Input"></a>

```java
public java.lang.String getKey1Input();
```

- *Type:* java.lang.String

---

##### `canaryByHeader`<sup>Required</sup> <a name="canaryByHeader" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.canaryByHeader"></a>

```java
public java.lang.String getCanaryByHeader();
```

- *Type:* java.lang.String

---

##### `key1`<sup>Required</sup> <a name="key1" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.key1"></a>

```java
public java.lang.String getKey1();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---


### OceancdRolloutSpecTrafficNginxOutputReference <a name="OceancdRolloutSpecTrafficNginxOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficNginxOutputReference;

new OceancdRolloutSpecTrafficNginxOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation">putAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation">resetAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix">resetNginxAnnotationPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIngressAnnotation` <a name="putAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation"></a>

```java
public void putAdditionalIngressAnnotation(OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.putAdditionalIngressAnnotation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `resetAdditionalIngressAnnotation` <a name="resetAdditionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetAdditionalIngressAnnotation"></a>

```java
public void resetAdditionalIngressAnnotation()
```

##### `resetNginxAnnotationPrefix` <a name="resetNginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.resetNginxAnnotationPrefix"></a>

```java
public void resetNginxAnnotationPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation">additionalIngressAnnotation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput">additionalIngressAnnotationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput">nginxAnnotationPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput">stableIngressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix">nginxAnnotationPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress">stableIngress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalIngressAnnotation`<sup>Required</sup> <a name="additionalIngressAnnotation" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotation"></a>

```java
public OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference getAdditionalIngressAnnotation();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotationOutputReference</a>

---

##### `additionalIngressAnnotationInput`<sup>Optional</sup> <a name="additionalIngressAnnotationInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.additionalIngressAnnotationInput"></a>

```java
public OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation getAdditionalIngressAnnotationInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation">OceancdRolloutSpecTrafficNginxAdditionalIngressAnnotation</a>

---

##### `nginxAnnotationPrefixInput`<sup>Optional</sup> <a name="nginxAnnotationPrefixInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefixInput"></a>

```java
public java.lang.String getNginxAnnotationPrefixInput();
```

- *Type:* java.lang.String

---

##### `stableIngressInput`<sup>Optional</sup> <a name="stableIngressInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngressInput"></a>

```java
public java.lang.String getStableIngressInput();
```

- *Type:* java.lang.String

---

##### `nginxAnnotationPrefix`<sup>Required</sup> <a name="nginxAnnotationPrefix" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.nginxAnnotationPrefix"></a>

```java
public java.lang.String getNginxAnnotationPrefix();
```

- *Type:* java.lang.String

---

##### `stableIngress`<sup>Required</sup> <a name="stableIngress" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.stableIngress"></a>

```java
public java.lang.String getStableIngress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficNginx getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---


### OceancdRolloutSpecTrafficOutputReference <a name="OceancdRolloutSpecTrafficOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficOutputReference;

new OceancdRolloutSpecTrafficOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb">putAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador">putAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio">putIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx">putNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong">putPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi">putSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb">resetAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador">resetAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService">resetCanaryService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio">resetIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx">resetNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong">resetPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi">resetSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService">resetStableService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlb` <a name="putAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb"></a>

```java
public void putAlb(OceancdRolloutSpecTrafficAlb value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAlb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `putAmbassador` <a name="putAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador"></a>

```java
public void putAmbassador(OceancdRolloutSpecTrafficAmbassador value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putAmbassador.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `putIstio` <a name="putIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio"></a>

```java
public void putIstio(OceancdRolloutSpecTrafficIstio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putIstio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `putNginx` <a name="putNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx"></a>

```java
public void putNginx(OceancdRolloutSpecTrafficNginx value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putNginx.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `putPingPong` <a name="putPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong"></a>

```java
public void putPingPong(OceancdRolloutSpecTrafficPingPong value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putPingPong.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `putSmi` <a name="putSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi"></a>

```java
public void putSmi(OceancdRolloutSpecTrafficSmi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.putSmi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `resetAlb` <a name="resetAlb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAlb"></a>

```java
public void resetAlb()
```

##### `resetAmbassador` <a name="resetAmbassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetAmbassador"></a>

```java
public void resetAmbassador()
```

##### `resetCanaryService` <a name="resetCanaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetCanaryService"></a>

```java
public void resetCanaryService()
```

##### `resetIstio` <a name="resetIstio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetIstio"></a>

```java
public void resetIstio()
```

##### `resetNginx` <a name="resetNginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetNginx"></a>

```java
public void resetNginx()
```

##### `resetPingPong` <a name="resetPingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetPingPong"></a>

```java
public void resetPingPong()
```

##### `resetSmi` <a name="resetSmi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetSmi"></a>

```java
public void resetSmi()
```

##### `resetStableService` <a name="resetStableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.resetStableService"></a>

```java
public void resetStableService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb">alb</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador">ambassador</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio">istio</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx">nginx</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong">pingPong</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi">smi</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput">albInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput">ambassadorInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput">canaryServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput">istioInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput">nginxInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput">pingPongInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput">smiInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput">stableServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService">canaryService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService">stableService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alb`<sup>Required</sup> <a name="alb" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.alb"></a>

```java
public OceancdRolloutSpecTrafficAlbOutputReference getAlb();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlbOutputReference">OceancdRolloutSpecTrafficAlbOutputReference</a>

---

##### `ambassador`<sup>Required</sup> <a name="ambassador" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassador"></a>

```java
public OceancdRolloutSpecTrafficAmbassadorOutputReference getAmbassador();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassadorOutputReference">OceancdRolloutSpecTrafficAmbassadorOutputReference</a>

---

##### `istio`<sup>Required</sup> <a name="istio" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istio"></a>

```java
public OceancdRolloutSpecTrafficIstioOutputReference getIstio();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstioOutputReference">OceancdRolloutSpecTrafficIstioOutputReference</a>

---

##### `nginx`<sup>Required</sup> <a name="nginx" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginx"></a>

```java
public OceancdRolloutSpecTrafficNginxOutputReference getNginx();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginxOutputReference">OceancdRolloutSpecTrafficNginxOutputReference</a>

---

##### `pingPong`<sup>Required</sup> <a name="pingPong" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPong"></a>

```java
public OceancdRolloutSpecTrafficPingPongOutputReference getPingPong();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference">OceancdRolloutSpecTrafficPingPongOutputReference</a>

---

##### `smi`<sup>Required</sup> <a name="smi" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smi"></a>

```java
public OceancdRolloutSpecTrafficSmiOutputReference getSmi();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference">OceancdRolloutSpecTrafficSmiOutputReference</a>

---

##### `albInput`<sup>Optional</sup> <a name="albInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.albInput"></a>

```java
public OceancdRolloutSpecTrafficAlb getAlbInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAlb">OceancdRolloutSpecTrafficAlb</a>

---

##### `ambassadorInput`<sup>Optional</sup> <a name="ambassadorInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.ambassadorInput"></a>

```java
public OceancdRolloutSpecTrafficAmbassador getAmbassadorInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficAmbassador">OceancdRolloutSpecTrafficAmbassador</a>

---

##### `canaryServiceInput`<sup>Optional</sup> <a name="canaryServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryServiceInput"></a>

```java
public java.lang.String getCanaryServiceInput();
```

- *Type:* java.lang.String

---

##### `istioInput`<sup>Optional</sup> <a name="istioInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.istioInput"></a>

```java
public OceancdRolloutSpecTrafficIstio getIstioInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficIstio">OceancdRolloutSpecTrafficIstio</a>

---

##### `nginxInput`<sup>Optional</sup> <a name="nginxInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.nginxInput"></a>

```java
public OceancdRolloutSpecTrafficNginx getNginxInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficNginx">OceancdRolloutSpecTrafficNginx</a>

---

##### `pingPongInput`<sup>Optional</sup> <a name="pingPongInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.pingPongInput"></a>

```java
public OceancdRolloutSpecTrafficPingPong getPingPongInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---

##### `smiInput`<sup>Optional</sup> <a name="smiInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.smiInput"></a>

```java
public OceancdRolloutSpecTrafficSmi getSmiInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---

##### `stableServiceInput`<sup>Optional</sup> <a name="stableServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableServiceInput"></a>

```java
public java.lang.String getStableServiceInput();
```

- *Type:* java.lang.String

---

##### `canaryService`<sup>Required</sup> <a name="canaryService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.canaryService"></a>

```java
public java.lang.String getCanaryService();
```

- *Type:* java.lang.String

---

##### `stableService`<sup>Required</sup> <a name="stableService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.stableService"></a>

```java
public java.lang.String getStableService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTraffic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTraffic">OceancdRolloutSpecTraffic</a>

---


### OceancdRolloutSpecTrafficPingPongOutputReference <a name="OceancdRolloutSpecTrafficPingPongOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficPingPongOutputReference;

new OceancdRolloutSpecTrafficPingPongOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput">pingServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput">pongServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService">pingService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService">pongService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pingServiceInput`<sup>Optional</sup> <a name="pingServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingServiceInput"></a>

```java
public java.lang.String getPingServiceInput();
```

- *Type:* java.lang.String

---

##### `pongServiceInput`<sup>Optional</sup> <a name="pongServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongServiceInput"></a>

```java
public java.lang.String getPongServiceInput();
```

- *Type:* java.lang.String

---

##### `pingService`<sup>Required</sup> <a name="pingService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pingService"></a>

```java
public java.lang.String getPingService();
```

- *Type:* java.lang.String

---

##### `pongService`<sup>Required</sup> <a name="pongService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.pongService"></a>

```java
public java.lang.String getPongService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPongOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficPingPong getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficPingPong">OceancdRolloutSpecTrafficPingPong</a>

---


### OceancdRolloutSpecTrafficSmiOutputReference <a name="OceancdRolloutSpecTrafficSmiOutputReference" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.oceancd_rollout_spec.OceancdRolloutSpecTrafficSmiOutputReference;

new OceancdRolloutSpecTrafficSmiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService">resetSmiRootService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName">resetTrafficSplitName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSmiRootService` <a name="resetSmiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetSmiRootService"></a>

```java
public void resetSmiRootService()
```

##### `resetTrafficSplitName` <a name="resetTrafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.resetTrafficSplitName"></a>

```java
public void resetTrafficSplitName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput">smiRootServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput">trafficSplitNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService">smiRootService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName">trafficSplitName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `smiRootServiceInput`<sup>Optional</sup> <a name="smiRootServiceInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootServiceInput"></a>

```java
public java.lang.String getSmiRootServiceInput();
```

- *Type:* java.lang.String

---

##### `trafficSplitNameInput`<sup>Optional</sup> <a name="trafficSplitNameInput" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitNameInput"></a>

```java
public java.lang.String getTrafficSplitNameInput();
```

- *Type:* java.lang.String

---

##### `smiRootService`<sup>Required</sup> <a name="smiRootService" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.smiRootService"></a>

```java
public java.lang.String getSmiRootService();
```

- *Type:* java.lang.String

---

##### `trafficSplitName`<sup>Required</sup> <a name="trafficSplitName" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.trafficSplitName"></a>

```java
public java.lang.String getTrafficSplitName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmiOutputReference.property.internalValue"></a>

```java
public OceancdRolloutSpecTrafficSmi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdRolloutSpec.OceancdRolloutSpecTrafficSmi">OceancdRolloutSpecTrafficSmi</a>

---



