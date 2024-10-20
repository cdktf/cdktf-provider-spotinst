# `elastigroupAzureV3` Submodule <a name="`elastigroupAzureV3` Submodule" id="@cdktf/provider-spotinst.elastigroupAzureV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzureV3 <a name="ElastigroupAzureV3" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3(Construct Scope, string Id, ElastigroupAzureV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config">ElastigroupAzureV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config">ElastigroupAzureV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin">PutLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity">PutManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy">PutScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy">PutScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes">PutVmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData">ResetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity">ResetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout">ResetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetExtensions">ResetExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin">ResetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity">ResetManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount">ResetOnDemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingDownPolicy">ResetScalingDownPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingUpPolicy">ResetScalingUpPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensions` <a name="PutExtensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putExtensions"></a>

```csharp
private void PutExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage"></a>

```csharp
private void PutImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage.parameter.value"></a>

- *Type:* object

---

##### `PutLogin` <a name="PutLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin"></a>

```csharp
private void PutLogin(ElastigroupAzureV3Login Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `PutManagedServiceIdentity` <a name="PutManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity"></a>

```csharp
private void PutManagedServiceIdentity(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity.parameter.value"></a>

- *Type:* object

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork"></a>

```csharp
private void PutNetwork(ElastigroupAzureV3Network Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `PutScalingDownPolicy` <a name="PutScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy"></a>

```csharp
private void PutScalingDownPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingDownPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutScalingUpPolicy` <a name="PutScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy"></a>

```csharp
private void PutScalingUpPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putScalingUpPolicy.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags.parameter.value"></a>

- *Type:* object

---

##### `PutVmSizes` <a name="PutVmSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes"></a>

```csharp
private void PutVmSizes(ElastigroupAzureV3VmSizes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putVmSizes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

---

##### `ResetCustomData` <a name="ResetCustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData"></a>

```csharp
private void ResetCustomData()
```

##### `ResetDesiredCapacity` <a name="ResetDesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity"></a>

```csharp
private void ResetDesiredCapacity()
```

##### `ResetDrainingTimeout` <a name="ResetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout"></a>

```csharp
private void ResetDrainingTimeout()
```

##### `ResetExtensions` <a name="ResetExtensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetExtensions"></a>

```csharp
private void ResetExtensions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetLogin` <a name="ResetLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin"></a>

```csharp
private void ResetLogin()
```

##### `ResetManagedServiceIdentity` <a name="ResetManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity"></a>

```csharp
private void ResetManagedServiceIdentity()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetOnDemandCount` <a name="ResetOnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount"></a>

```csharp
private void ResetOnDemandCount()
```

##### `ResetScalingDownPolicy` <a name="ResetScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingDownPolicy"></a>

```csharp
private void ResetScalingDownPolicy()
```

##### `ResetScalingUpPolicy` <a name="ResetScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetScalingUpPolicy"></a>

```csharp
private void ResetScalingUpPolicy()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage"></a>

```csharp
private void ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzureV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzureV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzureV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

ElastigroupAzureV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElastigroupAzureV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElastigroupAzureV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAzureV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.extensions">Extensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList">ElastigroupAzureV3ExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image">Image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicy">ScalingDownPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList">ElastigroupAzureV3ScalingDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicy">ScalingUpPolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList">ElastigroupAzureV3ScalingUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizes">VmSizes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference">ElastigroupAzureV3VmSizesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput">CustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput">DesiredCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput">DrainingTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.extensionsInput">ExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput">FallbackToOnDemandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput">ImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput">LoginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput">ManagedServiceIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput">OnDemandCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicyInput">ScalingDownPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicyInput">ScalingUpPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizesInput">VmSizesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData">CustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount">OnDemandCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.extensions"></a>

```csharp
public ElastigroupAzureV3ExtensionsList Extensions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList">ElastigroupAzureV3ExtensionsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image"></a>

```csharp
public ElastigroupAzureV3ImageList Image { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a>

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login"></a>

```csharp
public ElastigroupAzureV3LoginOutputReference Login { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a>

---

##### `ManagedServiceIdentity`<sup>Required</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity"></a>

```csharp
public ElastigroupAzureV3ManagedServiceIdentityList ManagedServiceIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network"></a>

```csharp
public ElastigroupAzureV3NetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a>

---

##### `ScalingDownPolicy`<sup>Required</sup> <a name="ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicy"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyList ScalingDownPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList">ElastigroupAzureV3ScalingDownPolicyList</a>

---

##### `ScalingUpPolicy`<sup>Required</sup> <a name="ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicy"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyList ScalingUpPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList">ElastigroupAzureV3ScalingUpPolicyList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags"></a>

```csharp
public ElastigroupAzureV3TagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a>

---

##### `VmSizes`<sup>Required</sup> <a name="VmSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizes"></a>

```csharp
public ElastigroupAzureV3VmSizesOutputReference VmSizes { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference">ElastigroupAzureV3VmSizesOutputReference</a>

---

##### `CustomDataInput`<sup>Optional</sup> <a name="CustomDataInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput"></a>

```csharp
public string CustomDataInput { get; }
```

- *Type:* string

---

##### `DesiredCapacityInput`<sup>Optional</sup> <a name="DesiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput"></a>

```csharp
public double DesiredCapacityInput { get; }
```

- *Type:* double

---

##### `DrainingTimeoutInput`<sup>Optional</sup> <a name="DrainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput"></a>

```csharp
public double DrainingTimeoutInput { get; }
```

- *Type:* double

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.extensionsInput"></a>

```csharp
public object ExtensionsInput { get; }
```

- *Type:* object

---

##### `FallbackToOnDemandInput`<sup>Optional</sup> <a name="FallbackToOnDemandInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput"></a>

```csharp
public object FallbackToOnDemandInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput"></a>

```csharp
public object ImageInput { get; }
```

- *Type:* object

---

##### `LoginInput`<sup>Optional</sup> <a name="LoginInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput"></a>

```csharp
public ElastigroupAzureV3Login LoginInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `ManagedServiceIdentityInput`<sup>Optional</sup> <a name="ManagedServiceIdentityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput"></a>

```csharp
public object ManagedServiceIdentityInput { get; }
```

- *Type:* object

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput"></a>

```csharp
public ElastigroupAzureV3Network NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `OnDemandCountInput`<sup>Optional</sup> <a name="OnDemandCountInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput"></a>

```csharp
public double OnDemandCountInput { get; }
```

- *Type:* double

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ScalingDownPolicyInput`<sup>Optional</sup> <a name="ScalingDownPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingDownPolicyInput"></a>

```csharp
public object ScalingDownPolicyInput { get; }
```

- *Type:* object

---

##### `ScalingUpPolicyInput`<sup>Optional</sup> <a name="ScalingUpPolicyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.scalingUpPolicyInput"></a>

```csharp
public object ScalingUpPolicyInput { get; }
```

- *Type:* object

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput"></a>

```csharp
public double SpotPercentageInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `VmSizesInput`<sup>Optional</sup> <a name="VmSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.vmSizesInput"></a>

```csharp
public ElastigroupAzureV3VmSizes VmSizesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

---

##### `CustomData`<sup>Required</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData"></a>

```csharp
public string CustomData { get; }
```

- *Type:* string

---

##### `DesiredCapacity`<sup>Required</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; }
```

- *Type:* double

---

##### `DrainingTimeout`<sup>Required</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; }
```

- *Type:* double

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand"></a>

```csharp
public object FallbackToOnDemand { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnDemandCount`<sup>Required</sup> <a name="OnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount"></a>

```csharp
public double OnDemandCount { get; }
```

- *Type:* double

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureV3Config <a name="ElastigroupAzureV3Config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object FallbackToOnDemand,
    string Name,
    ElastigroupAzureV3Network Network,
    string Os,
    string Region,
    string ResourceGroupName,
    ElastigroupAzureV3VmSizes VmSizes,
    string CustomData = null,
    double DesiredCapacity = null,
    double DrainingTimeout = null,
    object Extensions = null,
    string Id = null,
    object Image = null,
    ElastigroupAzureV3Login Login = null,
    object ManagedServiceIdentity = null,
    double MaxSize = null,
    double MinSize = null,
    double OnDemandCount = null,
    object ScalingDownPolicy = null,
    object ScalingUpPolicy = null,
    double SpotPercentage = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand">FallbackToOnDemand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network">Network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os">Os</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.vmSizes">VmSizes</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData">CustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity">DesiredCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout">DrainingTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.extensions">Extensions</a></code> | <code>object</code> | extensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image">Image</a></code> | <code>object</code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login">Login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity">ManagedServiceIdentity</a></code> | <code>object</code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize">MaxSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize">MinSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount">OnDemandCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingDownPolicy">ScalingDownPolicy</a></code> | <code>object</code> | scaling_down_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingUpPolicy">ScalingUpPolicy</a></code> | <code>object</code> | scaling_up_policy block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FallbackToOnDemand`<sup>Required</sup> <a name="FallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand"></a>

```csharp
public object FallbackToOnDemand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network"></a>

```csharp
public ElastigroupAzureV3Network Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `VmSizes`<sup>Required</sup> <a name="VmSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.vmSizes"></a>

```csharp
public ElastigroupAzureV3VmSizes VmSizes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#vm_sizes ElastigroupAzureV3#vm_sizes}

---

##### `CustomData`<sup>Optional</sup> <a name="CustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData"></a>

```csharp
public string CustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `DesiredCapacity`<sup>Optional</sup> <a name="DesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity"></a>

```csharp
public double DesiredCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `DrainingTimeout`<sup>Optional</sup> <a name="DrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout"></a>

```csharp
public double DrainingTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `Extensions`<sup>Optional</sup> <a name="Extensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.extensions"></a>

```csharp
public object Extensions { get; set; }
```

- *Type:* object

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#extensions ElastigroupAzureV3#extensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image"></a>

```csharp
public object Image { get; set; }
```

- *Type:* object

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `Login`<sup>Optional</sup> <a name="Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login"></a>

```csharp
public ElastigroupAzureV3Login Login { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `ManagedServiceIdentity`<sup>Optional</sup> <a name="ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity"></a>

```csharp
public object ManagedServiceIdentity { get; set; }
```

- *Type:* object

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `OnDemandCount`<sup>Optional</sup> <a name="OnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount"></a>

```csharp
public double OnDemandCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `ScalingDownPolicy`<sup>Optional</sup> <a name="ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingDownPolicy"></a>

```csharp
public object ScalingDownPolicy { get; set; }
```

- *Type:* object

scaling_down_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#scaling_down_policy ElastigroupAzureV3#scaling_down_policy}

---

##### `ScalingUpPolicy`<sup>Optional</sup> <a name="ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.scalingUpPolicy"></a>

```csharp
public object ScalingUpPolicy { get; set; }
```

- *Type:* object

scaling_up_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#scaling_up_policy ElastigroupAzureV3#scaling_up_policy}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

### ElastigroupAzureV3Extensions <a name="ElastigroupAzureV3Extensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Extensions {
    string ApiVersion,
    object MinorVersionAutoUpgrade,
    string Name,
    string Publisher,
    string Type,
    object EnableAutomaticUpgrade = null,
    System.Collections.Generic.IDictionary<string, string> ProtectedSettings = null,
    ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault = null,
    System.Collections.Generic.IDictionary<string, string> PublicSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#api_version ElastigroupAzureV3#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minor_version_auto_upgrade ElastigroupAzureV3#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.enableAutomaticUpgrade">EnableAutomaticUpgrade</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#enable_automatic_upgrade ElastigroupAzureV3#enable_automatic_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.protectedSettings">ProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#protected_settings ElastigroupAzureV3#protected_settings}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a></code> | protected_settings_from_key_vault block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.publicSettings">PublicSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#public_settings ElastigroupAzureV3#public_settings}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#api_version ElastigroupAzureV3#api_version}.

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.minorVersionAutoUpgrade"></a>

```csharp
public object MinorVersionAutoUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minor_version_auto_upgrade ElastigroupAzureV3#minor_version_auto_upgrade}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

##### `EnableAutomaticUpgrade`<sup>Optional</sup> <a name="EnableAutomaticUpgrade" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.enableAutomaticUpgrade"></a>

```csharp
public object EnableAutomaticUpgrade { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#enable_automatic_upgrade ElastigroupAzureV3#enable_automatic_upgrade}.

---

##### `ProtectedSettings`<sup>Optional</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.protectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#protected_settings ElastigroupAzureV3#protected_settings}.

---

##### `ProtectedSettingsFromKeyVault`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.protectedSettingsFromKeyVault"></a>

```csharp
public ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVault { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a>

protected_settings_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#protected_settings_from_key_vault ElastigroupAzureV3#protected_settings_from_key_vault}

---

##### `PublicSettings`<sup>Optional</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Extensions.property.publicSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#public_settings ElastigroupAzureV3#public_settings}.

---

### ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault <a name="ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault {
    string SecretUrl,
    string SourceVault
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault.property.secretUrl">SecretUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#secret_url ElastigroupAzureV3#secret_url}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault.property.sourceVault">SourceVault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source_vault ElastigroupAzureV3#source_vault}. |

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault.property.secretUrl"></a>

```csharp
public string SecretUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#secret_url ElastigroupAzureV3#secret_url}.

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault.property.sourceVault"></a>

```csharp
public string SourceVault { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source_vault ElastigroupAzureV3#source_vault}.

---

### ElastigroupAzureV3Image <a name="ElastigroupAzureV3Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Image {
    object Custom = null,
    object GalleryImage = null,
    object Marketplace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom">Custom</a></code> | <code>object</code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.galleryImage">GalleryImage</a></code> | <code>object</code> | gallery_image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace">Marketplace</a></code> | <code>object</code> | marketplace block. |

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom"></a>

```csharp
public object Custom { get; set; }
```

- *Type:* object

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}

---

##### `GalleryImage`<sup>Optional</sup> <a name="GalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.galleryImage"></a>

```csharp
public object GalleryImage { get; set; }
```

- *Type:* object

gallery_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#gallery_image ElastigroupAzureV3#gallery_image}

---

##### `Marketplace`<sup>Optional</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace"></a>

```csharp
public object Marketplace { get; set; }
```

- *Type:* object

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}

---

### ElastigroupAzureV3ImageCustom <a name="ElastigroupAzureV3ImageCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageCustom {
    string ImageName,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ImageGalleryImage <a name="ElastigroupAzureV3ImageGalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageGalleryImage {
    string GalleryName,
    string ImageName,
    string ResourceGroupName,
    string Version,
    string SpotAccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.galleryName">GalleryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#gallery_name ElastigroupAzureV3#gallery_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.spotAccountId">SpotAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_account_id ElastigroupAzureV3#spot_account_id}. |

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.galleryName"></a>

```csharp
public string GalleryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#gallery_name ElastigroupAzureV3#gallery_name}.

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

##### `SpotAccountId`<sup>Optional</sup> <a name="SpotAccountId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImage.property.spotAccountId"></a>

```csharp
public string SpotAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_account_id ElastigroupAzureV3#spot_account_id}.

---

### ElastigroupAzureV3ImageMarketplace <a name="ElastigroupAzureV3ImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageMarketplace {
    string Offer,
    string Publisher,
    string Sku,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

### ElastigroupAzureV3Login <a name="ElastigroupAzureV3Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Login {
    string UserName,
    string Password = null,
    string SshPublicKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}. |

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}.

---

### ElastigroupAzureV3ManagedServiceIdentity <a name="ElastigroupAzureV3ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ManagedServiceIdentity {
    string Name,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Network <a name="ElastigroupAzureV3Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Network {
    object NetworkInterfaces,
    string ResourceGroupName,
    string VirtualNetworkName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces">NetworkInterfaces</a></code> | <code>object</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}. |

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces"></a>

```csharp
public object NetworkInterfaces { get; set; }
```

- *Type:* object

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}.

---

### ElastigroupAzureV3NetworkNetworkInterfaces <a name="ElastigroupAzureV3NetworkNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfaces {
    object AssignPublicIp,
    object IsPrimary,
    string SubnetName,
    object AdditionalIpConfigs = null,
    object ApplicationSecurityGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary">IsPrimary</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName">SubnetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code>object</code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup">ApplicationSecurityGroup</a></code> | <code>object</code> | application_security_group block. |

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}.

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary"></a>

```csharp
public object IsPrimary { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}.

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName"></a>

```csharp
public string SubnetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}.

---

##### `AdditionalIpConfigs`<sup>Optional</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs"></a>

```csharp
public object AdditionalIpConfigs { get; set; }
```

- *Type:* object

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}

---

##### `ApplicationSecurityGroup`<sup>Optional</sup> <a name="ApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup"></a>

```csharp
public object ApplicationSecurityGroup { get; set; }
```

- *Type:* object

application_security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}

---

### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs {
    string Name,
    string PrivateIpVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion">PrivateIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `PrivateIpVersion`<sup>Optional</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion"></a>

```csharp
public string PrivateIpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}.

---

### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup {
    string Name,
    string ResourceGroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ScalingDownPolicy <a name="ElastigroupAzureV3ScalingDownPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicy {
    ElastigroupAzureV3ScalingDownPolicyAction Action,
    double Cooldown,
    double EvaluationPeriods,
    string MetricName,
    string Namespace,
    string Operator,
    double Period,
    string PolicyName,
    string Statistic,
    double Threshold,
    object Dimensions = null,
    object IsEnabled = null,
    string Source = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.action">Action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.cooldown">Cooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.action"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.cooldown"></a>

```csharp
public double Cooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}.

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}.

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicy.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}.

---

### ElastigroupAzureV3ScalingDownPolicyAction <a name="ElastigroupAzureV3ScalingDownPolicyAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyAction {
    string Adjustment = null,
    string Maximum = null,
    string Minimum = null,
    string Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.maximum">Maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}. |

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.maximum"></a>

```csharp
public string Maximum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

### ElastigroupAzureV3ScalingDownPolicyDimensions <a name="ElastigroupAzureV3ScalingDownPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyDimensions {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3ScalingUpPolicy <a name="ElastigroupAzureV3ScalingUpPolicy" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicy {
    ElastigroupAzureV3ScalingUpPolicyAction Action,
    double Cooldown,
    double EvaluationPeriods,
    string MetricName,
    string Namespace,
    string Operator,
    double Period,
    string PolicyName,
    string Statistic,
    double Threshold,
    object Dimensions = null,
    object IsEnabled = null,
    string Source = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.action">Action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.cooldown">Cooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.metricName">MetricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.period">Period</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.statistic">Statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.dimensions">Dimensions</a></code> | <code>object</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.action"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#action ElastigroupAzureV3#action}

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.cooldown"></a>

```csharp
public double Cooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#cooldown ElastigroupAzureV3#cooldown}.

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#evaluation_periods ElastigroupAzureV3#evaluation_periods}.

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#metric_name ElastigroupAzureV3#metric_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#namespace ElastigroupAzureV3#namespace}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#operator ElastigroupAzureV3#operator}.

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#period ElastigroupAzureV3#period}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#policy_name ElastigroupAzureV3#policy_name}.

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#statistic ElastigroupAzureV3#statistic}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#threshold ElastigroupAzureV3#threshold}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.dimensions"></a>

```csharp
public object Dimensions { get; set; }
```

- *Type:* object

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#dimensions ElastigroupAzureV3#dimensions}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#is_enabled ElastigroupAzureV3#is_enabled}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#source ElastigroupAzureV3#source}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicy.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#unit ElastigroupAzureV3#unit}.

---

### ElastigroupAzureV3ScalingUpPolicyAction <a name="ElastigroupAzureV3ScalingUpPolicyAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyAction {
    string Adjustment = null,
    string Maximum = null,
    string Minimum = null,
    string Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.adjustment">Adjustment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.maximum">Maximum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}. |

---

##### `Adjustment`<sup>Optional</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.adjustment"></a>

```csharp
public string Adjustment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#adjustment ElastigroupAzureV3#adjustment}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.maximum"></a>

```csharp
public string Maximum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#maximum ElastigroupAzureV3#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#minimum ElastigroupAzureV3#minimum}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#target ElastigroupAzureV3#target}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#type ElastigroupAzureV3#type}.

---

### ElastigroupAzureV3ScalingUpPolicyDimensions <a name="ElastigroupAzureV3ScalingUpPolicyDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyDimensions {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3Tags <a name="ElastigroupAzureV3Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3Tags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

### ElastigroupAzureV3VmSizes <a name="ElastigroupAzureV3VmSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3VmSizes {
    string[] OdSizes,
    string[] SpotSizes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.odSizes">OdSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.spotSizes">SpotSizes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}. |

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.odSizes"></a>

```csharp
public string[] OdSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes.property.spotSizes"></a>

```csharp
public string[] SpotSizes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.0/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureV3ExtensionsList <a name="ElastigroupAzureV3ExtensionsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.get"></a>

```csharp
private ElastigroupAzureV3ExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ExtensionsOutputReference <a name="ElastigroupAzureV3ExtensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.putProtectedSettingsFromKeyVault">PutProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetEnableAutomaticUpgrade">ResetEnableAutomaticUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetProtectedSettings">ResetProtectedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetProtectedSettingsFromKeyVault">ResetProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetPublicSettings">ResetPublicSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectedSettingsFromKeyVault` <a name="PutProtectedSettingsFromKeyVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.putProtectedSettingsFromKeyVault"></a>

```csharp
private void PutProtectedSettingsFromKeyVault(ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.putProtectedSettingsFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a>

---

##### `ResetEnableAutomaticUpgrade` <a name="ResetEnableAutomaticUpgrade" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetEnableAutomaticUpgrade"></a>

```csharp
private void ResetEnableAutomaticUpgrade()
```

##### `ResetProtectedSettings` <a name="ResetProtectedSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetProtectedSettings"></a>

```csharp
private void ResetProtectedSettings()
```

##### `ResetProtectedSettingsFromKeyVault` <a name="ResetProtectedSettingsFromKeyVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetProtectedSettingsFromKeyVault"></a>

```csharp
private void ResetProtectedSettingsFromKeyVault()
```

##### `ResetPublicSettings` <a name="ResetPublicSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.resetPublicSettings"></a>

```csharp
private void ResetPublicSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsFromKeyVault">ProtectedSettingsFromKeyVault</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.enableAutomaticUpgradeInput">EnableAutomaticUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.minorVersionAutoUpgradeInput">MinorVersionAutoUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsFromKeyVaultInput">ProtectedSettingsFromKeyVaultInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsInput">ProtectedSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publicSettingsInput">PublicSettingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.enableAutomaticUpgrade">EnableAutomaticUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.minorVersionAutoUpgrade">MinorVersionAutoUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettings">ProtectedSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publicSettings">PublicSettings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVault`<sup>Required</sup> <a name="ProtectedSettingsFromKeyVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsFromKeyVault"></a>

```csharp
public ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference ProtectedSettingsFromKeyVault { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference</a>

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpgradeInput`<sup>Optional</sup> <a name="EnableAutomaticUpgradeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.enableAutomaticUpgradeInput"></a>

```csharp
public object EnableAutomaticUpgradeInput { get; }
```

- *Type:* object

---

##### `MinorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="MinorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.minorVersionAutoUpgradeInput"></a>

```csharp
public object MinorVersionAutoUpgradeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectedSettingsFromKeyVaultInput`<sup>Optional</sup> <a name="ProtectedSettingsFromKeyVaultInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsFromKeyVaultInput"></a>

```csharp
public ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault ProtectedSettingsFromKeyVaultInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a>

---

##### `ProtectedSettingsInput`<sup>Optional</sup> <a name="ProtectedSettingsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublicSettingsInput`<sup>Optional</sup> <a name="PublicSettingsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publicSettingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `EnableAutomaticUpgrade`<sup>Required</sup> <a name="EnableAutomaticUpgrade" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.enableAutomaticUpgrade"></a>

```csharp
public object EnableAutomaticUpgrade { get; }
```

- *Type:* object

---

##### `MinorVersionAutoUpgrade`<sup>Required</sup> <a name="MinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.minorVersionAutoUpgrade"></a>

```csharp
public object MinorVersionAutoUpgrade { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectedSettings`<sup>Required</sup> <a name="ProtectedSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.protectedSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ProtectedSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PublicSettings`<sup>Required</sup> <a name="PublicSettings" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publicSettings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PublicSettings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference <a name="ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput">SecretUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultInput">SourceVaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.secretUrl">SecretUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.sourceVault">SourceVault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretUrlInput`<sup>Optional</sup> <a name="SecretUrlInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.secretUrlInput"></a>

```csharp
public string SecretUrlInput { get; }
```

- *Type:* string

---

##### `SourceVaultInput`<sup>Optional</sup> <a name="SourceVaultInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.sourceVaultInput"></a>

```csharp
public string SourceVaultInput { get; }
```

- *Type:* string

---

##### `SecretUrl`<sup>Required</sup> <a name="SecretUrl" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.secretUrl"></a>

```csharp
public string SecretUrl { get; }
```

- *Type:* string

---

##### `SourceVault`<sup>Required</sup> <a name="SourceVault" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.sourceVault"></a>

```csharp
public string SourceVault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVaultOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault">ElastigroupAzureV3ExtensionsProtectedSettingsFromKeyVault</a>

---


### ElastigroupAzureV3ImageCustomList <a name="ElastigroupAzureV3ImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageCustomList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get"></a>

```csharp
private ElastigroupAzureV3ImageCustomOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageCustomOutputReference <a name="ElastigroupAzureV3ImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageGalleryImageList <a name="ElastigroupAzureV3ImageGalleryImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageGalleryImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get"></a>

```csharp
private ElastigroupAzureV3ImageGalleryImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageGalleryImageOutputReference <a name="ElastigroupAzureV3ImageGalleryImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageGalleryImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resetSpotAccountId">ResetSpotAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpotAccountId` <a name="ResetSpotAccountId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.resetSpotAccountId"></a>

```csharp
private void ResetSpotAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryNameInput">GalleryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountIdInput">SpotAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryName">GalleryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountId">SpotAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GalleryNameInput`<sup>Optional</sup> <a name="GalleryNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryNameInput"></a>

```csharp
public string GalleryNameInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SpotAccountIdInput`<sup>Optional</sup> <a name="SpotAccountIdInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountIdInput"></a>

```csharp
public string SpotAccountIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `GalleryName`<sup>Required</sup> <a name="GalleryName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.galleryName"></a>

```csharp
public string GalleryName { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SpotAccountId`<sup>Required</sup> <a name="SpotAccountId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.spotAccountId"></a>

```csharp
public string SpotAccountId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageList <a name="ElastigroupAzureV3ImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get"></a>

```csharp
private ElastigroupAzureV3ImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageMarketplaceList <a name="ElastigroupAzureV3ImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageMarketplaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get"></a>

```csharp
private ElastigroupAzureV3ImageMarketplaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageMarketplaceOutputReference <a name="ElastigroupAzureV3ImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageMarketplaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ImageOutputReference <a name="ElastigroupAzureV3ImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage">PutGalleryImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace">PutMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetGalleryImage">ResetGalleryImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace">ResetMarketplace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom"></a>

```csharp
private void PutCustom(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom.parameter.value"></a>

- *Type:* object

---

##### `PutGalleryImage` <a name="PutGalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage"></a>

```csharp
private void PutGalleryImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putGalleryImage.parameter.value"></a>

- *Type:* object

---

##### `PutMarketplace` <a name="PutMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace"></a>

```csharp
private void PutMarketplace(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* object

---

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetGalleryImage` <a name="ResetGalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetGalleryImage"></a>

```csharp
private void ResetGalleryImage()
```

##### `ResetMarketplace` <a name="ResetMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace"></a>

```csharp
private void ResetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImage">GalleryImage</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList">ElastigroupAzureV3ImageGalleryImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace">Marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput">CustomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImageInput">GalleryImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput">MarketplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom"></a>

```csharp
public ElastigroupAzureV3ImageCustomList Custom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a>

---

##### `GalleryImage`<sup>Required</sup> <a name="GalleryImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImage"></a>

```csharp
public ElastigroupAzureV3ImageGalleryImageList GalleryImage { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageGalleryImageList">ElastigroupAzureV3ImageGalleryImageList</a>

---

##### `Marketplace`<sup>Required</sup> <a name="Marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace"></a>

```csharp
public ElastigroupAzureV3ImageMarketplaceList Marketplace { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput"></a>

```csharp
public object CustomInput { get; }
```

- *Type:* object

---

##### `GalleryImageInput`<sup>Optional</sup> <a name="GalleryImageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.galleryImageInput"></a>

```csharp
public object GalleryImageInput { get; }
```

- *Type:* object

---

##### `MarketplaceInput`<sup>Optional</sup> <a name="MarketplaceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput"></a>

```csharp
public object MarketplaceInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3LoginOutputReference <a name="ElastigroupAzureV3LoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3LoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey">ResetSshPublicKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey"></a>

```csharp
private void ResetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey">SshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput"></a>

```csharp
public string SshPublicKeyInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey"></a>

```csharp
public string SshPublicKey { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3Login InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---


### ElastigroupAzureV3ManagedServiceIdentityList <a name="ElastigroupAzureV3ManagedServiceIdentityList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ManagedServiceIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get"></a>

```csharp
private ElastigroupAzureV3ManagedServiceIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ManagedServiceIdentityOutputReference <a name="ElastigroupAzureV3ManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ManagedServiceIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get"></a>

```csharp
private ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion">ResetPrivateIpVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateIpVersion` <a name="ResetPrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```csharp
private void ResetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput">PrivateIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion">PrivateIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateIpVersionInput`<sup>Optional</sup> <a name="PrivateIpVersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```csharp
public string PrivateIpVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateIpVersion`<sup>Required</sup> <a name="PrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```csharp
public string PrivateIpVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get"></a>

```csharp
private ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesList <a name="ElastigroupAzureV3NetworkNetworkInterfacesList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get"></a>

```csharp
private ElastigroupAzureV3NetworkNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkNetworkInterfacesOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs">PutAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup">PutApplicationSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs">ResetAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup">ResetApplicationSecurityGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalIpConfigs` <a name="PutAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs"></a>

```csharp
private void PutAdditionalIpConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutApplicationSecurityGroup` <a name="PutApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup"></a>

```csharp
private void PutApplicationSecurityGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalIpConfigs` <a name="ResetAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs"></a>

```csharp
private void ResetAdditionalIpConfigs()
```

##### `ResetApplicationSecurityGroup` <a name="ResetApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup"></a>

```csharp
private void ResetApplicationSecurityGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs">AdditionalIpConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup">ApplicationSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput">AdditionalIpConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput">ApplicationSecurityGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput">IsPrimaryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput">SubnetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary">IsPrimary</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName">SubnetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalIpConfigs`<sup>Required</sup> <a name="AdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs"></a>

```csharp
public ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList AdditionalIpConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a>

---

##### `ApplicationSecurityGroup`<sup>Required</sup> <a name="ApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup"></a>

```csharp
public ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList ApplicationSecurityGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a>

---

##### `AdditionalIpConfigsInput`<sup>Optional</sup> <a name="AdditionalIpConfigsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput"></a>

```csharp
public object AdditionalIpConfigsInput { get; }
```

- *Type:* object

---

##### `ApplicationSecurityGroupInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput"></a>

```csharp
public object ApplicationSecurityGroupInput { get; }
```

- *Type:* object

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput"></a>

```csharp
public object AssignPublicIpInput { get; }
```

- *Type:* object

---

##### `IsPrimaryInput`<sup>Optional</sup> <a name="IsPrimaryInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput"></a>

```csharp
public object IsPrimaryInput { get; }
```

- *Type:* object

---

##### `SubnetNameInput`<sup>Optional</sup> <a name="SubnetNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput"></a>

```csharp
public string SubnetNameInput { get; }
```

- *Type:* string

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp"></a>

```csharp
public object AssignPublicIp { get; }
```

- *Type:* object

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary"></a>

```csharp
public object IsPrimary { get; }
```

- *Type:* object

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName"></a>

```csharp
public string SubnetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3NetworkOutputReference <a name="ElastigroupAzureV3NetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3NetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces"></a>

```csharp
public ElastigroupAzureV3NetworkNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a>

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput"></a>

```csharp
public object NetworkInterfacesInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput"></a>

```csharp
public string VirtualNetworkNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3Network InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---


### ElastigroupAzureV3ScalingDownPolicyActionOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyActionOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximumInput">MaximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximumInput"></a>

```csharp
public string MaximumInput { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

---


### ElastigroupAzureV3ScalingDownPolicyDimensionsList <a name="ElastigroupAzureV3ScalingDownPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get"></a>

```csharp
private ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingDownPolicyList <a name="ElastigroupAzureV3ScalingDownPolicyList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get"></a>

```csharp
private ElastigroupAzureV3ScalingDownPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingDownPolicyOutputReference <a name="ElastigroupAzureV3ScalingDownPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingDownPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction"></a>

```csharp
private void PutAction(ElastigroupAzureV3ScalingDownPolicyAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

---

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference">ElastigroupAzureV3ScalingDownPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList">ElastigroupAzureV3ScalingDownPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldown">Cooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.action"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyActionOutputReference">ElastigroupAzureV3ScalingDownPolicyActionOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensions"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyDimensionsList">ElastigroupAzureV3ScalingDownPolicyDimensionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.actionInput"></a>

```csharp
public ElastigroupAzureV3ScalingDownPolicyAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyAction">ElastigroupAzureV3ScalingDownPolicyAction</a>

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldownInput"></a>

```csharp
public double CooldownInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.cooldown"></a>

```csharp
public double Cooldown { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingDownPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingUpPolicyActionOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyActionOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetAdjustment">ResetAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjustment` <a name="ResetAdjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetAdjustment"></a>

```csharp
private void ResetAdjustment()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustmentInput">AdjustmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximumInput">MaximumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustment">Adjustment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximum">Maximum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdjustmentInput`<sup>Optional</sup> <a name="AdjustmentInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustmentInput"></a>

```csharp
public string AdjustmentInput { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximumInput"></a>

```csharp
public string MaximumInput { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Adjustment`<sup>Required</sup> <a name="Adjustment" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.adjustment"></a>

```csharp
public string Adjustment { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.maximum"></a>

```csharp
public string Maximum { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

---


### ElastigroupAzureV3ScalingUpPolicyDimensionsList <a name="ElastigroupAzureV3ScalingUpPolicyDimensionsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get"></a>

```csharp
private ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingUpPolicyList <a name="ElastigroupAzureV3ScalingUpPolicyList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get"></a>

```csharp
private ElastigroupAzureV3ScalingUpPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3ScalingUpPolicyOutputReference <a name="ElastigroupAzureV3ScalingUpPolicyOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3ScalingUpPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction"></a>

```csharp
private void PutAction(ElastigroupAzureV3ScalingUpPolicyAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

---

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions"></a>

```csharp
private void PutDimensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.putDimensions.parameter.value"></a>

- *Type:* object

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference">ElastigroupAzureV3ScalingUpPolicyActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList">ElastigroupAzureV3ScalingUpPolicyDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldownInput">CooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldown">Cooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.action"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyActionOutputReference">ElastigroupAzureV3ScalingUpPolicyActionOutputReference</a>

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensions"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyDimensionsList">ElastigroupAzureV3ScalingUpPolicyDimensionsList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.actionInput"></a>

```csharp
public ElastigroupAzureV3ScalingUpPolicyAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyAction">ElastigroupAzureV3ScalingUpPolicyAction</a>

---

##### `CooldownInput`<sup>Optional</sup> <a name="CooldownInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldownInput"></a>

```csharp
public double CooldownInput { get; }
```

- *Type:* double

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.dimensionsInput"></a>

```csharp
public object DimensionsInput { get; }
```

- *Type:* object

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Cooldown`<sup>Required</sup> <a name="Cooldown" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.cooldown"></a>

```csharp
public double Cooldown { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ScalingUpPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3TagsList <a name="ElastigroupAzureV3TagsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3TagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get"></a>

```csharp
private ElastigroupAzureV3TagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3TagsOutputReference <a name="ElastigroupAzureV3TagsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3TagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ElastigroupAzureV3VmSizesOutputReference <a name="ElastigroupAzureV3VmSizesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new ElastigroupAzureV3VmSizesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizesInput">OdSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizesInput">SpotSizesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizes">OdSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizes">SpotSizes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OdSizesInput`<sup>Optional</sup> <a name="OdSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizesInput"></a>

```csharp
public string[] OdSizesInput { get; }
```

- *Type:* string[]

---

##### `SpotSizesInput`<sup>Optional</sup> <a name="SpotSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizesInput"></a>

```csharp
public string[] SpotSizesInput { get; }
```

- *Type:* string[]

---

##### `OdSizes`<sup>Required</sup> <a name="OdSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.odSizes"></a>

```csharp
public string[] OdSizes { get; }
```

- *Type:* string[]

---

##### `SpotSizes`<sup>Required</sup> <a name="SpotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.spotSizes"></a>

```csharp
public string[] SpotSizes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizesOutputReference.property.internalValue"></a>

```csharp
public ElastigroupAzureV3VmSizes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3VmSizes">ElastigroupAzureV3VmSizes</a>

---



