# `oceanAksNp` Submodule <a name="`oceanAksNp` Submodule" id="@cdktf/provider-spotinst.oceanAksNp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAksNp <a name="OceanAksNp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np spotinst_ocean_aks_np}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNp(Construct Scope, string Id, OceanAksNpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig">OceanAksNpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler">PutAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms">PutHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth">PutHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig">PutLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler">ResetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp">ResetEnableNodePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand">ResetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms">ResetHeadrooms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion">ResetKubernetesVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig">ResetLinuxOsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount">ResetMaxCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount">ResetMinCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb">ResetOsDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType">ResetOsDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku">ResetOsSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType">ResetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds">ResetPodSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage">ResetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds">ResetVnetSubnetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaler` <a name="PutAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler"></a>

```csharp
private void PutAutoscaler(OceanAksNpAutoscaler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters"></a>

```csharp
private void PutFilters(OceanAksNpFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `PutHeadrooms` <a name="PutHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms"></a>

```csharp
private void PutHeadrooms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHeadrooms.parameter.value"></a>

- *Type:* object

---

##### `PutHealth` <a name="PutHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth"></a>

```csharp
private void PutHealth(OceanAksNpHealth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `PutLinuxOsConfig` <a name="PutLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig"></a>

```csharp
private void PutLinuxOsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putLinuxOsConfig.parameter.value"></a>

- *Type:* object

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling"></a>

```csharp
private void PutScheduling(OceanAksNpScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putTaints.parameter.value"></a>

- *Type:* object

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(OceanAksNpUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `ResetAutoscaler` <a name="ResetAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetAutoscaler"></a>

```csharp
private void ResetAutoscaler()
```

##### `ResetEnableNodePublicIp` <a name="ResetEnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetEnableNodePublicIp"></a>

```csharp
private void ResetEnableNodePublicIp()
```

##### `ResetFallbackToOndemand` <a name="ResetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFallbackToOndemand"></a>

```csharp
private void ResetFallbackToOndemand()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetHeadrooms` <a name="ResetHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHeadrooms"></a>

```csharp
private void ResetHeadrooms()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetHealth"></a>

```csharp
private void ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubernetesVersion` <a name="ResetKubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetKubernetesVersion"></a>

```csharp
private void ResetKubernetesVersion()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLinuxOsConfig` <a name="ResetLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetLinuxOsConfig"></a>

```csharp
private void ResetLinuxOsConfig()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxCount"></a>

```csharp
private void ResetMaxCount()
```

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMaxPodsPerNode"></a>

```csharp
private void ResetMaxPodsPerNode()
```

##### `ResetMinCount` <a name="ResetMinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetMinCount"></a>

```csharp
private void ResetMinCount()
```

##### `ResetOsDiskSizeGb` <a name="ResetOsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskSizeGb"></a>

```csharp
private void ResetOsDiskSizeGb()
```

##### `ResetOsDiskType` <a name="ResetOsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsDiskType"></a>

```csharp
private void ResetOsDiskType()
```

##### `ResetOsSku` <a name="ResetOsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsSku"></a>

```csharp
private void ResetOsSku()
```

##### `ResetOsType` <a name="ResetOsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetOsType"></a>

```csharp
private void ResetOsType()
```

##### `ResetPodSubnetIds` <a name="ResetPodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetPodSubnetIds"></a>

```csharp
private void ResetPodSubnetIds()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetSpotPercentage` <a name="ResetSpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetSpotPercentage"></a>

```csharp
private void ResetSpotPercentage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetTaints"></a>

```csharp
private void ResetTaints()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetVnetSubnetIds` <a name="ResetVnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.resetVnetSubnetIds"></a>

```csharp
private void ResetVnetSubnetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksNp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksNp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksNp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanAksNp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceanAksNp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanAksNp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanAksNp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceanAksNp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms">Headrooms</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig">LinuxOsConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput">AksClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput">AksInfrastructureResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput">AksRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput">AksResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput">AutoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput">AvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput">ControllerClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput">EnableNodePublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput">FallbackToOndemandInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput">HeadroomsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput">HealthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput">LinuxOsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput">MaxCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput">MinCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput">OsDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput">OsDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput">OsSkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput">PodSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput">SpotPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput">VnetSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName">AksClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion">AksRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId">ControllerClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount">MaxCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount">MinCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType">OsDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku">OsSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds">PodSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds">VnetSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Autoscaler`<sup>Required</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscaler"></a>

```csharp
public OceanAksNpAutoscalerOutputReference Autoscaler { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference">OceanAksNpAutoscalerOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filters"></a>

```csharp
public OceanAksNpFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference">OceanAksNpFiltersOutputReference</a>

---

##### `Headrooms`<sup>Required</sup> <a name="Headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headrooms"></a>

```csharp
public OceanAksNpHeadroomsList Headrooms { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList">OceanAksNpHeadroomsList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.health"></a>

```csharp
public OceanAksNpHealthOutputReference Health { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference">OceanAksNpHealthOutputReference</a>

---

##### `LinuxOsConfig`<sup>Required</sup> <a name="LinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfig"></a>

```csharp
public OceanAksNpLinuxOsConfigList LinuxOsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList">OceanAksNpLinuxOsConfigList</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.scheduling"></a>

```csharp
public OceanAksNpSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference">OceanAksNpSchedulingOutputReference</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taints"></a>

```csharp
public OceanAksNpTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList">OceanAksNpTaintsList</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicy"></a>

```csharp
public OceanAksNpUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference">OceanAksNpUpdatePolicyOutputReference</a>

---

##### `AksClusterNameInput`<sup>Optional</sup> <a name="AksClusterNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterNameInput"></a>

```csharp
public string AksClusterNameInput { get; }
```

- *Type:* string

---

##### `AksInfrastructureResourceGroupNameInput`<sup>Optional</sup> <a name="AksInfrastructureResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupNameInput"></a>

```csharp
public string AksInfrastructureResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `AksRegionInput`<sup>Optional</sup> <a name="AksRegionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegionInput"></a>

```csharp
public string AksRegionInput { get; }
```

- *Type:* string

---

##### `AksResourceGroupNameInput`<sup>Optional</sup> <a name="AksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupNameInput"></a>

```csharp
public string AksResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `AutoscalerInput`<sup>Optional</sup> <a name="AutoscalerInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.autoscalerInput"></a>

```csharp
public OceanAksNpAutoscaler AutoscalerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---

##### `AvailabilityZonesInput`<sup>Optional</sup> <a name="AvailabilityZonesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZonesInput"></a>

```csharp
public string[] AvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `ControllerClusterIdInput`<sup>Optional</sup> <a name="ControllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterIdInput"></a>

```csharp
public string ControllerClusterIdInput { get; }
```

- *Type:* string

---

##### `EnableNodePublicIpInput`<sup>Optional</sup> <a name="EnableNodePublicIpInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIpInput"></a>

```csharp
public object EnableNodePublicIpInput { get; }
```

- *Type:* object

---

##### `FallbackToOndemandInput`<sup>Optional</sup> <a name="FallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemandInput"></a>

```csharp
public object FallbackToOndemandInput { get; }
```

- *Type:* object

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.filtersInput"></a>

```csharp
public OceanAksNpFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---

##### `HeadroomsInput`<sup>Optional</sup> <a name="HeadroomsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.headroomsInput"></a>

```csharp
public object HeadroomsInput { get; }
```

- *Type:* object

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.healthInput"></a>

```csharp
public OceanAksNpHealth HealthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersionInput"></a>

```csharp
public string KubernetesVersionInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LinuxOsConfigInput`<sup>Optional</sup> <a name="LinuxOsConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.linuxOsConfigInput"></a>

```csharp
public object LinuxOsConfigInput { get; }
```

- *Type:* object

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCountInput"></a>

```csharp
public double MaxCountInput { get; }
```

- *Type:* double

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNodeInput"></a>

```csharp
public double MaxPodsPerNodeInput { get; }
```

- *Type:* double

---

##### `MinCountInput`<sup>Optional</sup> <a name="MinCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCountInput"></a>

```csharp
public double MinCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsDiskSizeGbInput`<sup>Optional</sup> <a name="OsDiskSizeGbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGbInput"></a>

```csharp
public double OsDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `OsDiskTypeInput`<sup>Optional</sup> <a name="OsDiskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskTypeInput"></a>

```csharp
public string OsDiskTypeInput { get; }
```

- *Type:* string

---

##### `OsSkuInput`<sup>Optional</sup> <a name="OsSkuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSkuInput"></a>

```csharp
public string OsSkuInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `PodSubnetIdsInput`<sup>Optional</sup> <a name="PodSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIdsInput"></a>

```csharp
public string[] PodSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.schedulingInput"></a>

```csharp
public OceanAksNpScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---

##### `SpotPercentageInput`<sup>Optional</sup> <a name="SpotPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentageInput"></a>

```csharp
public double SpotPercentageInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.updatePolicyInput"></a>

```csharp
public OceanAksNpUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---

##### `VnetSubnetIdsInput`<sup>Optional</sup> <a name="VnetSubnetIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIdsInput"></a>

```csharp
public string[] VnetSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksClusterName"></a>

```csharp
public string AksClusterName { get; }
```

- *Type:* string

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksInfrastructureResourceGroupName"></a>

```csharp
public string AksInfrastructureResourceGroupName { get; }
```

- *Type:* string

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksRegion"></a>

```csharp
public string AksRegion { get; }
```

- *Type:* string

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.aksResourceGroupName"></a>

```csharp
public string AksResourceGroupName { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.controllerClusterId"></a>

```csharp
public string ControllerClusterId { get; }
```

- *Type:* string

---

##### `EnableNodePublicIp`<sup>Required</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.enableNodePublicIp"></a>

```csharp
public object EnableNodePublicIp { get; }
```

- *Type:* object

---

##### `FallbackToOndemand`<sup>Required</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxCount"></a>

```csharp
public double MaxCount { get; }
```

- *Type:* double

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; }
```

- *Type:* double

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.minCount"></a>

```csharp
public double MinCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskSizeGb"></a>

```csharp
public double OsDiskSizeGb { get; }
```

- *Type:* double

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osDiskType"></a>

```csharp
public string OsDiskType { get; }
```

- *Type:* string

---

##### `OsSku`<sup>Required</sup> <a name="OsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osSku"></a>

```csharp
public string OsSku { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `PodSubnetIds`<sup>Required</sup> <a name="PodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.podSubnetIds"></a>

```csharp
public string[] PodSubnetIds { get; }
```

- *Type:* string[]

---

##### `SpotPercentage`<sup>Required</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VnetSubnetIds`<sup>Required</sup> <a name="VnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.vnetSubnetIds"></a>

```csharp
public string[] VnetSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksNpAutoscaler <a name="OceanAksNpAutoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscaler {
    OceanAksNpAutoscalerAutoscaleDown AutoscaleDown = null,
    OceanAksNpAutoscalerAutoscaleHeadroom AutoscaleHeadroom = null,
    object AutoscaleIsEnabled = null,
    OceanAksNpAutoscalerResourceLimits ResourceLimits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `AutoscaleDown`<sup>Optional</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleDown"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleDown AutoscaleDown { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#autoscale_down OceanAksNp#autoscale_down}

---

##### `AutoscaleHeadroom`<sup>Optional</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleHeadroom"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroom AutoscaleHeadroom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#autoscale_headroom OceanAksNp#autoscale_headroom}

---

##### `AutoscaleIsEnabled`<sup>Optional</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.autoscaleIsEnabled"></a>

```csharp
public object AutoscaleIsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#autoscale_is_enabled OceanAksNp#autoscale_is_enabled}.

---

##### `ResourceLimits`<sup>Optional</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler.property.resourceLimits"></a>

```csharp
public OceanAksNpAutoscalerResourceLimits ResourceLimits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#resource_limits OceanAksNp#resource_limits}

---

### OceanAksNpAutoscalerAutoscaleDown <a name="OceanAksNpAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleDown {
    double MaxScaleDownPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}. |

---

##### `MaxScaleDownPercentage`<sup>Optional</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_scale_down_percentage OceanAksNp#max_scale_down_percentage}.

---

### OceanAksNpAutoscalerAutoscaleHeadroom <a name="OceanAksNpAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleHeadroom {
    OceanAksNpAutoscalerAutoscaleHeadroomAutomatic Automatic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom.property.automatic"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic Automatic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#automatic OceanAksNp#automatic}

---

### OceanAksNpAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleHeadroomAutomatic {
    object IsEnabled = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage">Percentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#percentage OceanAksNp#percentage}.

---

### OceanAksNpAutoscalerResourceLimits <a name="OceanAksNpAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerResourceLimits {
    double MaxMemoryGib = null,
    double MaxVcpu = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

### OceanAksNpConfig <a name="OceanAksNpConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AksClusterName,
    string AksInfrastructureResourceGroupName,
    string AksRegion,
    string AksResourceGroupName,
    string[] AvailabilityZones,
    string ControllerClusterId,
    string Name,
    OceanAksNpAutoscaler Autoscaler = null,
    object EnableNodePublicIp = null,
    object FallbackToOndemand = null,
    OceanAksNpFilters Filters = null,
    object Headrooms = null,
    OceanAksNpHealth Health = null,
    string Id = null,
    string KubernetesVersion = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    object LinuxOsConfig = null,
    double MaxCount = null,
    double MaxPodsPerNode = null,
    double MinCount = null,
    double OsDiskSizeGb = null,
    string OsDiskType = null,
    string OsSku = null,
    string OsType = null,
    string[] PodSubnetIds = null,
    OceanAksNpScheduling Scheduling = null,
    double SpotPercentage = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    object Taints = null,
    OceanAksNpUpdatePolicy UpdatePolicy = null,
    string[] VnetSubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName">AksClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName">AksInfrastructureResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion">AksRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName">AksResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId">ControllerClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#name OceanAksNp#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler">Autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand">FallbackToOndemand</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms">Headrooms</a></code> | <code>object</code> | headrooms block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health">Health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#id OceanAksNp#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig">LinuxOsConfig</a></code> | <code>object</code> | linux_os_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount">MaxCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount">MinCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType">OsDiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku">OsSku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds">PodSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage">SpotPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints">Taints</a></code> | <code>object</code> | taints block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds">VnetSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AksClusterName`<sup>Required</sup> <a name="AksClusterName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksClusterName"></a>

```csharp
public string AksClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_cluster_name OceanAksNp#aks_cluster_name}.

---

##### `AksInfrastructureResourceGroupName`<sup>Required</sup> <a name="AksInfrastructureResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksInfrastructureResourceGroupName"></a>

```csharp
public string AksInfrastructureResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_infrastructure_resource_group_name OceanAksNp#aks_infrastructure_resource_group_name}.

---

##### `AksRegion`<sup>Required</sup> <a name="AksRegion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksRegion"></a>

```csharp
public string AksRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_region OceanAksNp#aks_region}.

---

##### `AksResourceGroupName`<sup>Required</sup> <a name="AksResourceGroupName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.aksResourceGroupName"></a>

```csharp
public string AksResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#aks_resource_group_name OceanAksNp#aks_resource_group_name}.

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#availability_zones OceanAksNp#availability_zones}.

---

##### `ControllerClusterId`<sup>Required</sup> <a name="ControllerClusterId" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.controllerClusterId"></a>

```csharp
public string ControllerClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#controller_cluster_id OceanAksNp#controller_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#name OceanAksNp#name}.

---

##### `Autoscaler`<sup>Optional</sup> <a name="Autoscaler" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.autoscaler"></a>

```csharp
public OceanAksNpAutoscaler Autoscaler { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#autoscaler OceanAksNp#autoscaler}

---

##### `EnableNodePublicIp`<sup>Optional</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.enableNodePublicIp"></a>

```csharp
public object EnableNodePublicIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#enable_node_public_ip OceanAksNp#enable_node_public_ip}.

---

##### `FallbackToOndemand`<sup>Optional</sup> <a name="FallbackToOndemand" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.fallbackToOndemand"></a>

```csharp
public object FallbackToOndemand { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#fallback_to_ondemand OceanAksNp#fallback_to_ondemand}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.filters"></a>

```csharp
public OceanAksNpFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#filters OceanAksNp#filters}

---

##### `Headrooms`<sup>Optional</sup> <a name="Headrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.headrooms"></a>

```csharp
public object Headrooms { get; set; }
```

- *Type:* object

headrooms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#headrooms OceanAksNp#headrooms}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.health"></a>

```csharp
public OceanAksNpHealth Health { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#health OceanAksNp#health}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#id OceanAksNp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesVersion`<sup>Optional</sup> <a name="KubernetesVersion" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#kubernetes_version OceanAksNp#kubernetes_version}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#labels OceanAksNp#labels}.

---

##### `LinuxOsConfig`<sup>Optional</sup> <a name="LinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.linuxOsConfig"></a>

```csharp
public object LinuxOsConfig { get; set; }
```

- *Type:* object

linux_os_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#linux_os_config OceanAksNp#linux_os_config}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxCount"></a>

```csharp
public double MaxCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_count OceanAksNp#max_count}.

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.maxPodsPerNode"></a>

```csharp
public double MaxPodsPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_pods_per_node OceanAksNp#max_pods_per_node}.

---

##### `MinCount`<sup>Optional</sup> <a name="MinCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.minCount"></a>

```csharp
public double MinCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_count OceanAksNp#min_count}.

---

##### `OsDiskSizeGb`<sup>Optional</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskSizeGb"></a>

```csharp
public double OsDiskSizeGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_disk_size_gb OceanAksNp#os_disk_size_gb}.

---

##### `OsDiskType`<sup>Optional</sup> <a name="OsDiskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osDiskType"></a>

```csharp
public string OsDiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_disk_type OceanAksNp#os_disk_type}.

---

##### `OsSku`<sup>Optional</sup> <a name="OsSku" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osSku"></a>

```csharp
public string OsSku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_sku OceanAksNp#os_sku}.

---

##### `OsType`<sup>Optional</sup> <a name="OsType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#os_type OceanAksNp#os_type}.

---

##### `PodSubnetIds`<sup>Optional</sup> <a name="PodSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.podSubnetIds"></a>

```csharp
public string[] PodSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#pod_subnet_ids OceanAksNp#pod_subnet_ids}.

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.scheduling"></a>

```csharp
public OceanAksNpScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#scheduling OceanAksNp#scheduling}

---

##### `SpotPercentage`<sup>Optional</sup> <a name="SpotPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.spotPercentage"></a>

```csharp
public double SpotPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#spot_percentage OceanAksNp#spot_percentage}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#tags OceanAksNp#tags}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#taints OceanAksNp#taints}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.updatePolicy"></a>

```csharp
public OceanAksNpUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#update_policy OceanAksNp#update_policy}

---

##### `VnetSubnetIds`<sup>Optional</sup> <a name="VnetSubnetIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpConfig.property.vnetSubnetIds"></a>

```csharp
public string[] VnetSubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vnet_subnet_ids OceanAksNp#vnet_subnet_ids}.

---

### OceanAksNpFilters <a name="OceanAksNpFilters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpFilters {
    string AcceleratedNetworking = null,
    string[] Architectures = null,
    string DiskPerformance = null,
    string[] ExcludeSeries = null,
    string[] GpuTypes = null,
    double MaxGpu = null,
    double MaxMemoryGib = null,
    double MaxVcpu = null,
    double MinDisk = null,
    double MinGpu = null,
    double MinMemoryGib = null,
    double MinNics = null,
    double MinVcpu = null,
    string[] Series = null,
    string[] VmTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures">Architectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance">DiskPerformance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries">ExcludeSeries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes">GpuTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu">MaxGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk">MinDisk</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu">MinGpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics">MinNics</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu">MinVcpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series">Series</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#series OceanAksNp#series}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes">VmTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}. |

---

##### `AcceleratedNetworking`<sup>Optional</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.acceleratedNetworking"></a>

```csharp
public string AcceleratedNetworking { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#accelerated_networking OceanAksNp#accelerated_networking}.

---

##### `Architectures`<sup>Optional</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.architectures"></a>

```csharp
public string[] Architectures { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#architectures OceanAksNp#architectures}.

---

##### `DiskPerformance`<sup>Optional</sup> <a name="DiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.diskPerformance"></a>

```csharp
public string DiskPerformance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#disk_performance OceanAksNp#disk_performance}.

---

##### `ExcludeSeries`<sup>Optional</sup> <a name="ExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.excludeSeries"></a>

```csharp
public string[] ExcludeSeries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#exclude_series OceanAksNp#exclude_series}.

---

##### `GpuTypes`<sup>Optional</sup> <a name="GpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.gpuTypes"></a>

```csharp
public string[] GpuTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#gpu_types OceanAksNp#gpu_types}.

---

##### `MaxGpu`<sup>Optional</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxGpu"></a>

```csharp
public double MaxGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_gpu OceanAksNp#max_gpu}.

---

##### `MaxMemoryGib`<sup>Optional</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_memory_gib OceanAksNp#max_memory_gib}.

---

##### `MaxVcpu`<sup>Optional</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#max_vcpu OceanAksNp#max_vcpu}.

---

##### `MinDisk`<sup>Optional</sup> <a name="MinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minDisk"></a>

```csharp
public double MinDisk { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_disk OceanAksNp#min_disk}.

---

##### `MinGpu`<sup>Optional</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minGpu"></a>

```csharp
public double MinGpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_gpu OceanAksNp#min_gpu}.

---

##### `MinMemoryGib`<sup>Optional</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_memory_gib OceanAksNp#min_memory_gib}.

---

##### `MinNics`<sup>Optional</sup> <a name="MinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minNics"></a>

```csharp
public double MinNics { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_nics OceanAksNp#min_nics}.

---

##### `MinVcpu`<sup>Optional</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.minVcpu"></a>

```csharp
public double MinVcpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#min_vcpu OceanAksNp#min_vcpu}.

---

##### `Series`<sup>Optional</sup> <a name="Series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.series"></a>

```csharp
public string[] Series { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#series OceanAksNp#series}.

---

##### `VmTypes`<sup>Optional</sup> <a name="VmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters.property.vmTypes"></a>

```csharp
public string[] VmTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vm_types OceanAksNp#vm_types}.

---

### OceanAksNpHeadrooms <a name="OceanAksNpHeadrooms" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpHeadrooms {
    double CpuPerUnit = null,
    double GpuPerUnit = null,
    double MemoryPerUnit = null,
    double NumOfUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}. |

---

##### `CpuPerUnit`<sup>Optional</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#cpu_per_unit OceanAksNp#cpu_per_unit}.

---

##### `GpuPerUnit`<sup>Optional</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#gpu_per_unit OceanAksNp#gpu_per_unit}.

---

##### `MemoryPerUnit`<sup>Optional</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#memory_per_unit OceanAksNp#memory_per_unit}.

---

##### `NumOfUnits`<sup>Optional</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadrooms.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#num_of_units OceanAksNp#num_of_units}.

---

### OceanAksNpHealth <a name="OceanAksNpHealth" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpHealth {
    double GracePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}. |

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#grace_period OceanAksNp#grace_period}.

---

### OceanAksNpLinuxOsConfig <a name="OceanAksNpLinuxOsConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfig {
    object Sysctls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls">Sysctls</a></code> | <code>object</code> | sysctls block. |

---

##### `Sysctls`<sup>Optional</sup> <a name="Sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfig.property.sysctls"></a>

```csharp
public object Sysctls { get; set; }
```

- *Type:* object

sysctls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#sysctls OceanAksNp#sysctls}

---

### OceanAksNpLinuxOsConfigSysctls <a name="OceanAksNpLinuxOsConfigSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfigSysctls {
    double VmMaxMapCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}. |

---

##### `VmMaxMapCount`<sup>Optional</sup> <a name="VmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctls.property.vmMaxMapCount"></a>

```csharp
public double VmMaxMapCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vm_max_map_count OceanAksNp#vm_max_map_count}.

---

### OceanAksNpScheduling <a name="OceanAksNpScheduling" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpScheduling {
    OceanAksNpSchedulingShutdownHours ShutdownHours = null,
    object Tasks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks">Tasks</a></code> | <code>object</code> | tasks block. |

---

##### `ShutdownHours`<sup>Optional</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.shutdownHours"></a>

```csharp
public OceanAksNpSchedulingShutdownHours ShutdownHours { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#shutdown_hours OceanAksNp#shutdown_hours}

---

##### `Tasks`<sup>Optional</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling.property.tasks"></a>

```csharp
public object Tasks { get; set; }
```

- *Type:* object

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#tasks OceanAksNp#tasks}

---

### OceanAksNpSchedulingShutdownHours <a name="OceanAksNpSchedulingShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingShutdownHours {
    object IsEnabled = null,
    string[] TimeWindows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TimeWindows`<sup>Optional</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#time_windows OceanAksNp#time_windows}.

---

### OceanAksNpSchedulingTasks <a name="OceanAksNpSchedulingTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasks {
    string CronExpression,
    object IsEnabled,
    string TaskType,
    OceanAksNpSchedulingTasksParameters Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression">CronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType">TaskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | parameters block. |

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.cronExpression"></a>

```csharp
public string CronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#cron_expression OceanAksNp#cron_expression}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#is_enabled OceanAksNp#is_enabled}.

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.taskType"></a>

```csharp
public string TaskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#task_type OceanAksNp#task_type}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasks.property.parameters"></a>

```csharp
public OceanAksNpSchedulingTasksParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#parameters OceanAksNp#parameters}

---

### OceanAksNpSchedulingTasksParameters <a name="OceanAksNpSchedulingTasksParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksParameters {
    OceanAksNpSchedulingTasksParametersParametersClusterRoll ParametersClusterRoll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | parameters_cluster_roll block. |

---

##### `ParametersClusterRoll`<sup>Optional</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters.property.parametersClusterRoll"></a>

```csharp
public OceanAksNpSchedulingTasksParametersParametersClusterRoll ParametersClusterRoll { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

parameters_cluster_roll block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#parameters_cluster_roll OceanAksNp#parameters_cluster_roll}

---

### OceanAksNpSchedulingTasksParametersParametersClusterRoll <a name="OceanAksNpSchedulingTasksParametersParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksParametersParametersClusterRoll {
    double BatchMinHealthyPercentage = null,
    double BatchSizePercentage = null,
    string Comment = null,
    object RespectPdb = null,
    object RespectRestrictScaleDown = null,
    string[] VngIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb">RespectPdb</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds">VngIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectPdb"></a>

```csharp
public object RespectPdb { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `RespectRestrictScaleDown`<sup>Optional</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.respectRestrictScaleDown"></a>

```csharp
public object RespectRestrictScaleDown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `VngIds`<sup>Optional</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll.property.vngIds"></a>

```csharp
public string[] VngIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

### OceanAksNpTaints <a name="OceanAksNpTaints" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpTaints {
    string Effect,
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect">Effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#key OceanAksNp#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#value OceanAksNp#value}. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#effect OceanAksNp#effect}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#key OceanAksNp#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#value OceanAksNp#value}.

---

### OceanAksNpUpdatePolicy <a name="OceanAksNpUpdatePolicy" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpUpdatePolicy {
    object ShouldRoll,
    object ConditionedRoll = null,
    OceanAksNpUpdatePolicyRollConfig RollConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#should_roll OceanAksNp#should_roll}.

---

##### `ConditionedRoll`<sup>Optional</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#conditioned_roll OceanAksNp#conditioned_roll}.

---

##### `RollConfig`<sup>Optional</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy.property.rollConfig"></a>

```csharp
public OceanAksNpUpdatePolicyRollConfig RollConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#roll_config OceanAksNp#roll_config}

---

### OceanAksNpUpdatePolicyRollConfig <a name="OceanAksNpUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpUpdatePolicyRollConfig {
    double BatchMinHealthyPercentage = null,
    double BatchSizePercentage = null,
    string Comment = null,
    string[] NodeNames = null,
    string[] NodePoolNames = null,
    object RespectPdb = null,
    object RespectRestrictScaleDown = null,
    string[] VngIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames">NodeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames">NodePoolNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb">RespectPdb</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds">VngIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}. |

---

##### `BatchMinHealthyPercentage`<sup>Optional</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_min_healthy_percentage OceanAksNp#batch_min_healthy_percentage}.

---

##### `BatchSizePercentage`<sup>Optional</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#batch_size_percentage OceanAksNp#batch_size_percentage}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#comment OceanAksNp#comment}.

---

##### `NodeNames`<sup>Optional</sup> <a name="NodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodeNames"></a>

```csharp
public string[] NodeNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#node_names OceanAksNp#node_names}.

---

##### `NodePoolNames`<sup>Optional</sup> <a name="NodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.nodePoolNames"></a>

```csharp
public string[] NodePoolNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#node_pool_names OceanAksNp#node_pool_names}.

---

##### `RespectPdb`<sup>Optional</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectPdb"></a>

```csharp
public object RespectPdb { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_pdb OceanAksNp#respect_pdb}.

---

##### `RespectRestrictScaleDown`<sup>Optional</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.respectRestrictScaleDown"></a>

```csharp
public object RespectRestrictScaleDown { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#respect_restrict_scale_down OceanAksNp#respect_restrict_scale_down}.

---

##### `VngIds`<sup>Optional</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig.property.vngIds"></a>

```csharp
public string[] VngIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.176.0/docs/resources/ocean_aks_np#vng_ids OceanAksNp#vng_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksNpAutoscalerAutoscaleDownOutputReference <a name="OceanAksNpAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleDownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">ResetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxScaleDownPercentage` <a name="ResetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```csharp
private void ResetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">MaxScaleDownPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">MaxScaleDownPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxScaleDownPercentageInput`<sup>Optional</sup> <a name="MaxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```csharp
public double MaxScaleDownPercentageInput { get; }
```

- *Type:* double

---

##### `MaxScaleDownPercentage`<sup>Required</sup> <a name="MaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```csharp
public double MaxScaleDownPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleDown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksNpAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksNpAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerAutoscaleHeadroomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">PutAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutomatic` <a name="PutAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```csharp
private void PutAutomatic(OceanAksNpAutoscalerAutoscaleHeadroomAutomatic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```csharp
private void ResetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic">Automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">AutomaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference Automatic { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroomAutomatic AutomaticInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomAutomatic">OceanAksNpAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---


### OceanAksNpAutoscalerOutputReference <a name="OceanAksNpAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown">PutAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom">PutAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits">PutResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown">ResetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom">ResetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled">ResetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits">ResetResourceLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscaleDown` <a name="PutAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown"></a>

```csharp
private void PutAutoscaleDown(OceanAksNpAutoscalerAutoscaleDown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `PutAutoscaleHeadroom` <a name="PutAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```csharp
private void PutAutoscaleHeadroom(OceanAksNpAutoscalerAutoscaleHeadroom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `PutResourceLimits` <a name="PutResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits"></a>

```csharp
private void PutResourceLimits(OceanAksNpAutoscalerResourceLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `ResetAutoscaleDown` <a name="ResetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleDown"></a>

```csharp
private void ResetAutoscaleDown()
```

##### `ResetAutoscaleHeadroom` <a name="ResetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```csharp
private void ResetAutoscaleHeadroom()
```

##### `ResetAutoscaleIsEnabled` <a name="ResetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```csharp
private void ResetAutoscaleIsEnabled()
```

##### `ResetResourceLimits` <a name="ResetResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.resetResourceLimits"></a>

```csharp
private void ResetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown">AutoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom">AutoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits">ResourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput">AutoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput">AutoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput">AutoscaleIsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput">ResourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled">AutoscaleIsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoscaleDown`<sup>Required</sup> <a name="AutoscaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDown"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleDownOutputReference AutoscaleDown { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDownOutputReference">OceanAksNpAutoscalerAutoscaleDownOutputReference</a>

---

##### `AutoscaleHeadroom`<sup>Required</sup> <a name="AutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroomOutputReference AutoscaleHeadroom { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroomOutputReference">OceanAksNpAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `ResourceLimits`<sup>Required</sup> <a name="ResourceLimits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimits"></a>

```csharp
public OceanAksNpAutoscalerResourceLimitsOutputReference ResourceLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference">OceanAksNpAutoscalerResourceLimitsOutputReference</a>

---

##### `AutoscaleDownInput`<sup>Optional</sup> <a name="AutoscaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleDownInput"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleDown AutoscaleDownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleDown">OceanAksNpAutoscalerAutoscaleDown</a>

---

##### `AutoscaleHeadroomInput`<sup>Optional</sup> <a name="AutoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```csharp
public OceanAksNpAutoscalerAutoscaleHeadroom AutoscaleHeadroomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerAutoscaleHeadroom">OceanAksNpAutoscalerAutoscaleHeadroom</a>

---

##### `AutoscaleIsEnabledInput`<sup>Optional</sup> <a name="AutoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```csharp
public object AutoscaleIsEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceLimitsInput`<sup>Optional</sup> <a name="ResourceLimitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.resourceLimitsInput"></a>

```csharp
public OceanAksNpAutoscalerResourceLimits ResourceLimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---

##### `AutoscaleIsEnabled`<sup>Required</sup> <a name="AutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```csharp
public object AutoscaleIsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpAutoscaler InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscaler">OceanAksNpAutoscaler</a>

---


### OceanAksNpAutoscalerResourceLimitsOutputReference <a name="OceanAksNpAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpAutoscalerResourceLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpAutoscalerResourceLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpAutoscalerResourceLimits">OceanAksNpAutoscalerResourceLimits</a>

---


### OceanAksNpFiltersOutputReference <a name="OceanAksNpFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking">ResetAcceleratedNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures">ResetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance">ResetDiskPerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries">ResetExcludeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes">ResetGpuTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu">ResetMaxGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib">ResetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu">ResetMaxVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk">ResetMinDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu">ResetMinGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib">ResetMinMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics">ResetMinNics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu">ResetMinVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries">ResetSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes">ResetVmTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratedNetworking` <a name="ResetAcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetAcceleratedNetworking"></a>

```csharp
private void ResetAcceleratedNetworking()
```

##### `ResetArchitectures` <a name="ResetArchitectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetArchitectures"></a>

```csharp
private void ResetArchitectures()
```

##### `ResetDiskPerformance` <a name="ResetDiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetDiskPerformance"></a>

```csharp
private void ResetDiskPerformance()
```

##### `ResetExcludeSeries` <a name="ResetExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetExcludeSeries"></a>

```csharp
private void ResetExcludeSeries()
```

##### `ResetGpuTypes` <a name="ResetGpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetGpuTypes"></a>

```csharp
private void ResetGpuTypes()
```

##### `ResetMaxGpu` <a name="ResetMaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxGpu"></a>

```csharp
private void ResetMaxGpu()
```

##### `ResetMaxMemoryGib` <a name="ResetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxMemoryGib"></a>

```csharp
private void ResetMaxMemoryGib()
```

##### `ResetMaxVcpu` <a name="ResetMaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMaxVcpu"></a>

```csharp
private void ResetMaxVcpu()
```

##### `ResetMinDisk` <a name="ResetMinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinDisk"></a>

```csharp
private void ResetMinDisk()
```

##### `ResetMinGpu` <a name="ResetMinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinGpu"></a>

```csharp
private void ResetMinGpu()
```

##### `ResetMinMemoryGib` <a name="ResetMinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinMemoryGib"></a>

```csharp
private void ResetMinMemoryGib()
```

##### `ResetMinNics` <a name="ResetMinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinNics"></a>

```csharp
private void ResetMinNics()
```

##### `ResetMinVcpu` <a name="ResetMinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetMinVcpu"></a>

```csharp
private void ResetMinVcpu()
```

##### `ResetSeries` <a name="ResetSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetSeries"></a>

```csharp
private void ResetSeries()
```

##### `ResetVmTypes` <a name="ResetVmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.resetVmTypes"></a>

```csharp
private void ResetVmTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput">AcceleratedNetworkingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput">ArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput">DiskPerformanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput">ExcludeSeriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput">GpuTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput">MaxGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput">MaxMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput">MaxVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput">MinDiskInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput">MinGpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput">MinMemoryGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput">MinNicsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput">MinVcpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput">SeriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput">VmTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking">AcceleratedNetworking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures">Architectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance">DiskPerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries">ExcludeSeries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes">GpuTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu">MaxGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib">MaxMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu">MaxVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk">MinDisk</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu">MinGpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib">MinMemoryGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics">MinNics</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu">MinVcpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series">Series</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes">VmTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratedNetworkingInput`<sup>Optional</sup> <a name="AcceleratedNetworkingInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworkingInput"></a>

```csharp
public string AcceleratedNetworkingInput { get; }
```

- *Type:* string

---

##### `ArchitecturesInput`<sup>Optional</sup> <a name="ArchitecturesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architecturesInput"></a>

```csharp
public string[] ArchitecturesInput { get; }
```

- *Type:* string[]

---

##### `DiskPerformanceInput`<sup>Optional</sup> <a name="DiskPerformanceInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformanceInput"></a>

```csharp
public string DiskPerformanceInput { get; }
```

- *Type:* string

---

##### `ExcludeSeriesInput`<sup>Optional</sup> <a name="ExcludeSeriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeriesInput"></a>

```csharp
public string[] ExcludeSeriesInput { get; }
```

- *Type:* string[]

---

##### `GpuTypesInput`<sup>Optional</sup> <a name="GpuTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypesInput"></a>

```csharp
public string[] GpuTypesInput { get; }
```

- *Type:* string[]

---

##### `MaxGpuInput`<sup>Optional</sup> <a name="MaxGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpuInput"></a>

```csharp
public double MaxGpuInput { get; }
```

- *Type:* double

---

##### `MaxMemoryGibInput`<sup>Optional</sup> <a name="MaxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGibInput"></a>

```csharp
public double MaxMemoryGibInput { get; }
```

- *Type:* double

---

##### `MaxVcpuInput`<sup>Optional</sup> <a name="MaxVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpuInput"></a>

```csharp
public double MaxVcpuInput { get; }
```

- *Type:* double

---

##### `MinDiskInput`<sup>Optional</sup> <a name="MinDiskInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDiskInput"></a>

```csharp
public double MinDiskInput { get; }
```

- *Type:* double

---

##### `MinGpuInput`<sup>Optional</sup> <a name="MinGpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpuInput"></a>

```csharp
public double MinGpuInput { get; }
```

- *Type:* double

---

##### `MinMemoryGibInput`<sup>Optional</sup> <a name="MinMemoryGibInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGibInput"></a>

```csharp
public double MinMemoryGibInput { get; }
```

- *Type:* double

---

##### `MinNicsInput`<sup>Optional</sup> <a name="MinNicsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNicsInput"></a>

```csharp
public double MinNicsInput { get; }
```

- *Type:* double

---

##### `MinVcpuInput`<sup>Optional</sup> <a name="MinVcpuInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpuInput"></a>

```csharp
public double MinVcpuInput { get; }
```

- *Type:* double

---

##### `SeriesInput`<sup>Optional</sup> <a name="SeriesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.seriesInput"></a>

```csharp
public string[] SeriesInput { get; }
```

- *Type:* string[]

---

##### `VmTypesInput`<sup>Optional</sup> <a name="VmTypesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypesInput"></a>

```csharp
public string[] VmTypesInput { get; }
```

- *Type:* string[]

---

##### `AcceleratedNetworking`<sup>Required</sup> <a name="AcceleratedNetworking" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.acceleratedNetworking"></a>

```csharp
public string AcceleratedNetworking { get; }
```

- *Type:* string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.architectures"></a>

```csharp
public string[] Architectures { get; }
```

- *Type:* string[]

---

##### `DiskPerformance`<sup>Required</sup> <a name="DiskPerformance" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.diskPerformance"></a>

```csharp
public string DiskPerformance { get; }
```

- *Type:* string

---

##### `ExcludeSeries`<sup>Required</sup> <a name="ExcludeSeries" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.excludeSeries"></a>

```csharp
public string[] ExcludeSeries { get; }
```

- *Type:* string[]

---

##### `GpuTypes`<sup>Required</sup> <a name="GpuTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.gpuTypes"></a>

```csharp
public string[] GpuTypes { get; }
```

- *Type:* string[]

---

##### `MaxGpu`<sup>Required</sup> <a name="MaxGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxGpu"></a>

```csharp
public double MaxGpu { get; }
```

- *Type:* double

---

##### `MaxMemoryGib`<sup>Required</sup> <a name="MaxMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxMemoryGib"></a>

```csharp
public double MaxMemoryGib { get; }
```

- *Type:* double

---

##### `MaxVcpu`<sup>Required</sup> <a name="MaxVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.maxVcpu"></a>

```csharp
public double MaxVcpu { get; }
```

- *Type:* double

---

##### `MinDisk`<sup>Required</sup> <a name="MinDisk" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minDisk"></a>

```csharp
public double MinDisk { get; }
```

- *Type:* double

---

##### `MinGpu`<sup>Required</sup> <a name="MinGpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minGpu"></a>

```csharp
public double MinGpu { get; }
```

- *Type:* double

---

##### `MinMemoryGib`<sup>Required</sup> <a name="MinMemoryGib" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minMemoryGib"></a>

```csharp
public double MinMemoryGib { get; }
```

- *Type:* double

---

##### `MinNics`<sup>Required</sup> <a name="MinNics" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minNics"></a>

```csharp
public double MinNics { get; }
```

- *Type:* double

---

##### `MinVcpu`<sup>Required</sup> <a name="MinVcpu" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.minVcpu"></a>

```csharp
public double MinVcpu { get; }
```

- *Type:* double

---

##### `Series`<sup>Required</sup> <a name="Series" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.series"></a>

```csharp
public string[] Series { get; }
```

- *Type:* string[]

---

##### `VmTypes`<sup>Required</sup> <a name="VmTypes" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.vmTypes"></a>

```csharp
public string[] VmTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFiltersOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpFilters">OceanAksNpFilters</a>

---


### OceanAksNpHeadroomsList <a name="OceanAksNpHeadroomsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpHeadroomsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get"></a>

```csharp
private OceanAksNpHeadroomsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpHeadroomsOutputReference <a name="OceanAksNpHeadroomsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpHeadroomsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit">ResetCpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit">ResetGpuPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit">ResetMemoryPerUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits">ResetNumOfUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPerUnit` <a name="ResetCpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetCpuPerUnit"></a>

```csharp
private void ResetCpuPerUnit()
```

##### `ResetGpuPerUnit` <a name="ResetGpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetGpuPerUnit"></a>

```csharp
private void ResetGpuPerUnit()
```

##### `ResetMemoryPerUnit` <a name="ResetMemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetMemoryPerUnit"></a>

```csharp
private void ResetMemoryPerUnit()
```

##### `ResetNumOfUnits` <a name="ResetNumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.resetNumOfUnits"></a>

```csharp
private void ResetNumOfUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput">CpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput">GpuPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput">MemoryPerUnitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput">NumOfUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit">CpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit">GpuPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit">MemoryPerUnit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits">NumOfUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPerUnitInput`<sup>Optional</sup> <a name="CpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnitInput"></a>

```csharp
public double CpuPerUnitInput { get; }
```

- *Type:* double

---

##### `GpuPerUnitInput`<sup>Optional</sup> <a name="GpuPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnitInput"></a>

```csharp
public double GpuPerUnitInput { get; }
```

- *Type:* double

---

##### `MemoryPerUnitInput`<sup>Optional</sup> <a name="MemoryPerUnitInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnitInput"></a>

```csharp
public double MemoryPerUnitInput { get; }
```

- *Type:* double

---

##### `NumOfUnitsInput`<sup>Optional</sup> <a name="NumOfUnitsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnitsInput"></a>

```csharp
public double NumOfUnitsInput { get; }
```

- *Type:* double

---

##### `CpuPerUnit`<sup>Required</sup> <a name="CpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.cpuPerUnit"></a>

```csharp
public double CpuPerUnit { get; }
```

- *Type:* double

---

##### `GpuPerUnit`<sup>Required</sup> <a name="GpuPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.gpuPerUnit"></a>

```csharp
public double GpuPerUnit { get; }
```

- *Type:* double

---

##### `MemoryPerUnit`<sup>Required</sup> <a name="MemoryPerUnit" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.memoryPerUnit"></a>

```csharp
public double MemoryPerUnit { get; }
```

- *Type:* double

---

##### `NumOfUnits`<sup>Required</sup> <a name="NumOfUnits" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.numOfUnits"></a>

```csharp
public double NumOfUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHeadroomsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpHealthOutputReference <a name="OceanAksNpHealthOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriodInput"></a>

```csharp
public double GracePeriodInput { get; }
```

- *Type:* double

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.gracePeriod"></a>

```csharp
public double GracePeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealthOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpHealth">OceanAksNpHealth</a>

---


### OceanAksNpLinuxOsConfigList <a name="OceanAksNpLinuxOsConfigList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get"></a>

```csharp
private OceanAksNpLinuxOsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpLinuxOsConfigOutputReference <a name="OceanAksNpLinuxOsConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls">PutSysctls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls">ResetSysctls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSysctls` <a name="PutSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls"></a>

```csharp
private void PutSysctls(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.putSysctls.parameter.value"></a>

- *Type:* object

---

##### `ResetSysctls` <a name="ResetSysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.resetSysctls"></a>

```csharp
private void ResetSysctls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls">Sysctls</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput">SysctlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sysctls`<sup>Required</sup> <a name="Sysctls" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctls"></a>

```csharp
public OceanAksNpLinuxOsConfigSysctlsList Sysctls { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList">OceanAksNpLinuxOsConfigSysctlsList</a>

---

##### `SysctlsInput`<sup>Optional</sup> <a name="SysctlsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.sysctlsInput"></a>

```csharp
public object SysctlsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpLinuxOsConfigSysctlsList <a name="OceanAksNpLinuxOsConfigSysctlsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfigSysctlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get"></a>

```csharp
private OceanAksNpLinuxOsConfigSysctlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpLinuxOsConfigSysctlsOutputReference <a name="OceanAksNpLinuxOsConfigSysctlsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpLinuxOsConfigSysctlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount">ResetVmMaxMapCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVmMaxMapCount` <a name="ResetVmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.resetVmMaxMapCount"></a>

```csharp
private void ResetVmMaxMapCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput">VmMaxMapCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount">VmMaxMapCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VmMaxMapCountInput`<sup>Optional</sup> <a name="VmMaxMapCountInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCountInput"></a>

```csharp
public double VmMaxMapCountInput { get; }
```

- *Type:* double

---

##### `VmMaxMapCount`<sup>Required</sup> <a name="VmMaxMapCount" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.vmMaxMapCount"></a>

```csharp
public double VmMaxMapCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpLinuxOsConfigSysctlsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpSchedulingOutputReference <a name="OceanAksNpSchedulingOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours">PutShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks">PutTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours">ResetShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks">ResetTasks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShutdownHours` <a name="PutShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours"></a>

```csharp
private void PutShutdownHours(OceanAksNpSchedulingShutdownHours Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putShutdownHours.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `PutTasks` <a name="PutTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks"></a>

```csharp
private void PutTasks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.putTasks.parameter.value"></a>

- *Type:* object

---

##### `ResetShutdownHours` <a name="ResetShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetShutdownHours"></a>

```csharp
private void ResetShutdownHours()
```

##### `ResetTasks` <a name="ResetTasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.resetTasks"></a>

```csharp
private void ResetTasks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours">ShutdownHours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks">Tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput">ShutdownHoursInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput">TasksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShutdownHours`<sup>Required</sup> <a name="ShutdownHours" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHours"></a>

```csharp
public OceanAksNpSchedulingShutdownHoursOutputReference ShutdownHours { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference">OceanAksNpSchedulingShutdownHoursOutputReference</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasks"></a>

```csharp
public OceanAksNpSchedulingTasksList Tasks { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList">OceanAksNpSchedulingTasksList</a>

---

##### `ShutdownHoursInput`<sup>Optional</sup> <a name="ShutdownHoursInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.shutdownHoursInput"></a>

```csharp
public OceanAksNpSchedulingShutdownHours ShutdownHoursInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---

##### `TasksInput`<sup>Optional</sup> <a name="TasksInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.tasksInput"></a>

```csharp
public object TasksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpScheduling">OceanAksNpScheduling</a>

---


### OceanAksNpSchedulingShutdownHoursOutputReference <a name="OceanAksNpSchedulingShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingShutdownHoursOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows">ResetTimeWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetTimeWindows` <a name="ResetTimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.resetTimeWindows"></a>

```csharp
private void ResetTimeWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput">TimeWindowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows">TimeWindows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `TimeWindowsInput`<sup>Optional</sup> <a name="TimeWindowsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindowsInput"></a>

```csharp
public string[] TimeWindowsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TimeWindows`<sup>Required</sup> <a name="TimeWindows" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.timeWindows"></a>

```csharp
public string[] TimeWindows { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHoursOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpSchedulingShutdownHours InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingShutdownHours">OceanAksNpSchedulingShutdownHours</a>

---


### OceanAksNpSchedulingTasksList <a name="OceanAksNpSchedulingTasksList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get"></a>

```csharp
private OceanAksNpSchedulingTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpSchedulingTasksOutputReference <a name="OceanAksNpSchedulingTasksOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters"></a>

```csharp
private void PutParameters(OceanAksNpSchedulingTasksParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput">CronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput">ParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput">TaskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression">CronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType">TaskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parameters"></a>

```csharp
public OceanAksNpSchedulingTasksParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference">OceanAksNpSchedulingTasksParametersOutputReference</a>

---

##### `CronExpressionInput`<sup>Optional</sup> <a name="CronExpressionInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpressionInput"></a>

```csharp
public string CronExpressionInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.parametersInput"></a>

```csharp
public OceanAksNpSchedulingTasksParameters ParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---

##### `TaskTypeInput`<sup>Optional</sup> <a name="TaskTypeInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskTypeInput"></a>

```csharp
public string TaskTypeInput { get; }
```

- *Type:* string

---

##### `CronExpression`<sup>Required</sup> <a name="CronExpression" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.cronExpression"></a>

```csharp
public string CronExpression { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `TaskType`<sup>Required</sup> <a name="TaskType" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.taskType"></a>

```csharp
public string TaskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpSchedulingTasksParametersOutputReference <a name="OceanAksNpSchedulingTasksParametersOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll">PutParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll">ResetParametersClusterRoll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParametersClusterRoll` <a name="PutParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll"></a>

```csharp
private void PutParametersClusterRoll(OceanAksNpSchedulingTasksParametersParametersClusterRoll Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.putParametersClusterRoll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `ResetParametersClusterRoll` <a name="ResetParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.resetParametersClusterRoll"></a>

```csharp
private void ResetParametersClusterRoll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll">ParametersClusterRoll</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput">ParametersClusterRollInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParametersClusterRoll`<sup>Required</sup> <a name="ParametersClusterRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRoll"></a>

```csharp
public OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference ParametersClusterRoll { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference">OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference</a>

---

##### `ParametersClusterRollInput`<sup>Optional</sup> <a name="ParametersClusterRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.parametersClusterRollInput"></a>

```csharp
public OceanAksNpSchedulingTasksParametersParametersClusterRoll ParametersClusterRollInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpSchedulingTasksParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParameters">OceanAksNpSchedulingTasksParameters</a>

---


### OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference <a name="OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown">ResetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds">ResetVngIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectPdb"></a>

```csharp
private void ResetRespectPdb()
```

##### `ResetRespectRestrictScaleDown` <a name="ResetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetRespectRestrictScaleDown"></a>

```csharp
private void ResetRespectRestrictScaleDown()
```

##### `ResetVngIds` <a name="ResetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.resetVngIds"></a>

```csharp
private void ResetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput">RespectRestrictScaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput">VngIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb">RespectPdb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds">VngIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdbInput"></a>

```csharp
public object RespectPdbInput { get; }
```

- *Type:* object

---

##### `RespectRestrictScaleDownInput`<sup>Optional</sup> <a name="RespectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDownInput"></a>

```csharp
public object RespectRestrictScaleDownInput { get; }
```

- *Type:* object

---

##### `VngIdsInput`<sup>Optional</sup> <a name="VngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIdsInput"></a>

```csharp
public string[] VngIdsInput { get; }
```

- *Type:* string[]

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectPdb"></a>

```csharp
public object RespectPdb { get; }
```

- *Type:* object

---

##### `RespectRestrictScaleDown`<sup>Required</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.respectRestrictScaleDown"></a>

```csharp
public object RespectRestrictScaleDown { get; }
```

- *Type:* object

---

##### `VngIds`<sup>Required</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.vngIds"></a>

```csharp
public string[] VngIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRollOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpSchedulingTasksParametersParametersClusterRoll InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpSchedulingTasksParametersParametersClusterRoll">OceanAksNpSchedulingTasksParametersParametersClusterRoll</a>

---


### OceanAksNpTaintsList <a name="OceanAksNpTaintsList" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get"></a>

```csharp
private OceanAksNpTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpTaintsOutputReference <a name="OceanAksNpTaintsOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpTaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanAksNpUpdatePolicyOutputReference <a name="OceanAksNpUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig">PutRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll">ResetConditionedRoll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig">ResetRollConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRollConfig` <a name="PutRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig"></a>

```csharp
private void PutRollConfig(OceanAksNpUpdatePolicyRollConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.putRollConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `ResetConditionedRoll` <a name="ResetConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetConditionedRoll"></a>

```csharp
private void ResetConditionedRoll()
```

##### `ResetRollConfig` <a name="ResetRollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.resetRollConfig"></a>

```csharp
private void ResetRollConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig">RollConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput">ConditionedRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput">RollConfigInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput">ShouldRollInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll">ConditionedRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll">ShouldRoll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RollConfig`<sup>Required</sup> <a name="RollConfig" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfig"></a>

```csharp
public OceanAksNpUpdatePolicyRollConfigOutputReference RollConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference">OceanAksNpUpdatePolicyRollConfigOutputReference</a>

---

##### `ConditionedRollInput`<sup>Optional</sup> <a name="ConditionedRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```csharp
public object ConditionedRollInput { get; }
```

- *Type:* object

---

##### `RollConfigInput`<sup>Optional</sup> <a name="RollConfigInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.rollConfigInput"></a>

```csharp
public OceanAksNpUpdatePolicyRollConfig RollConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---

##### `ShouldRollInput`<sup>Optional</sup> <a name="ShouldRollInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRollInput"></a>

```csharp
public object ShouldRollInput { get; }
```

- *Type:* object

---

##### `ConditionedRoll`<sup>Required</sup> <a name="ConditionedRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.conditionedRoll"></a>

```csharp
public object ConditionedRoll { get; }
```

- *Type:* object

---

##### `ShouldRoll`<sup>Required</sup> <a name="ShouldRoll" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.shouldRoll"></a>

```csharp
public object ShouldRoll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicy">OceanAksNpUpdatePolicy</a>

---


### OceanAksNpUpdatePolicyRollConfigOutputReference <a name="OceanAksNpUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanAksNpUpdatePolicyRollConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">ResetBatchMinHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage">ResetBatchSizePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames">ResetNodeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames">ResetNodePoolNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb">ResetRespectPdb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown">ResetRespectRestrictScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds">ResetVngIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchMinHealthyPercentage` <a name="ResetBatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```csharp
private void ResetBatchMinHealthyPercentage()
```

##### `ResetBatchSizePercentage` <a name="ResetBatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetBatchSizePercentage"></a>

```csharp
private void ResetBatchSizePercentage()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetNodeNames` <a name="ResetNodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodeNames"></a>

```csharp
private void ResetNodeNames()
```

##### `ResetNodePoolNames` <a name="ResetNodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetNodePoolNames"></a>

```csharp
private void ResetNodePoolNames()
```

##### `ResetRespectPdb` <a name="ResetRespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```csharp
private void ResetRespectPdb()
```

##### `ResetRespectRestrictScaleDown` <a name="ResetRespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetRespectRestrictScaleDown"></a>

```csharp
private void ResetRespectRestrictScaleDown()
```

##### `ResetVngIds` <a name="ResetVngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.resetVngIds"></a>

```csharp
private void ResetVngIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">BatchMinHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">BatchSizePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput">NodeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput">NodePoolNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput">RespectPdbInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput">RespectRestrictScaleDownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput">VngIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">BatchMinHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">BatchSizePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames">NodeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames">NodePoolNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb">RespectPdb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown">RespectRestrictScaleDown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds">VngIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchMinHealthyPercentageInput`<sup>Optional</sup> <a name="BatchMinHealthyPercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```csharp
public double BatchMinHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `BatchSizePercentageInput`<sup>Optional</sup> <a name="BatchSizePercentageInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```csharp
public double BatchSizePercentageInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NodeNamesInput`<sup>Optional</sup> <a name="NodeNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNamesInput"></a>

```csharp
public string[] NodeNamesInput { get; }
```

- *Type:* string[]

---

##### `NodePoolNamesInput`<sup>Optional</sup> <a name="NodePoolNamesInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNamesInput"></a>

```csharp
public string[] NodePoolNamesInput { get; }
```

- *Type:* string[]

---

##### `RespectPdbInput`<sup>Optional</sup> <a name="RespectPdbInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```csharp
public object RespectPdbInput { get; }
```

- *Type:* object

---

##### `RespectRestrictScaleDownInput`<sup>Optional</sup> <a name="RespectRestrictScaleDownInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDownInput"></a>

```csharp
public object RespectRestrictScaleDownInput { get; }
```

- *Type:* object

---

##### `VngIdsInput`<sup>Optional</sup> <a name="VngIdsInput" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIdsInput"></a>

```csharp
public string[] VngIdsInput { get; }
```

- *Type:* string[]

---

##### `BatchMinHealthyPercentage`<sup>Required</sup> <a name="BatchMinHealthyPercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```csharp
public double BatchMinHealthyPercentage { get; }
```

- *Type:* double

---

##### `BatchSizePercentage`<sup>Required</sup> <a name="BatchSizePercentage" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```csharp
public double BatchSizePercentage { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `NodeNames`<sup>Required</sup> <a name="NodeNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodeNames"></a>

```csharp
public string[] NodeNames { get; }
```

- *Type:* string[]

---

##### `NodePoolNames`<sup>Required</sup> <a name="NodePoolNames" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.nodePoolNames"></a>

```csharp
public string[] NodePoolNames { get; }
```

- *Type:* string[]

---

##### `RespectPdb`<sup>Required</sup> <a name="RespectPdb" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```csharp
public object RespectPdb { get; }
```

- *Type:* object

---

##### `RespectRestrictScaleDown`<sup>Required</sup> <a name="RespectRestrictScaleDown" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.respectRestrictScaleDown"></a>

```csharp
public object RespectRestrictScaleDown { get; }
```

- *Type:* object

---

##### `VngIds`<sup>Required</sup> <a name="VngIds" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.vngIds"></a>

```csharp
public string[] VngIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```csharp
public OceanAksNpUpdatePolicyRollConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAksNp.OceanAksNpUpdatePolicyRollConfig">OceanAksNpUpdatePolicyRollConfig</a>

---



