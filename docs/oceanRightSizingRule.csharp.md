# `oceanRightSizingRule` Submodule <a name="`oceanRightSizingRule` Submodule" id="@cdktf/provider-spotinst.oceanRightSizingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanRightSizingRule <a name="OceanRightSizingRule" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule spotinst_ocean_right_sizing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRule(Construct Scope, string Id, OceanRightSizingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig">OceanRightSizingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig">OceanRightSizingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads">PutAttachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads">PutDetachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries">PutRecommendationApplicationBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals">PutRecommendationApplicationIntervals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold">PutRecommendationApplicationMinThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues">PutRecommendationApplicationOverheadValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads">ResetAttachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads">ResetDetachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId">ResetOceanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries">ResetRecommendationApplicationBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold">ResetRecommendationApplicationMinThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues">ResetRecommendationApplicationOverheadValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartPods">ResetRestartPods</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachWorkloads` <a name="PutAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads"></a>

```csharp
private void PutAttachWorkloads(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads.parameter.value"></a>

- *Type:* object

---

##### `PutDetachWorkloads` <a name="PutDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads"></a>

```csharp
private void PutDetachWorkloads(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads.parameter.value"></a>

- *Type:* object

---

##### `PutRecommendationApplicationBoundaries` <a name="PutRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries"></a>

```csharp
private void PutRecommendationApplicationBoundaries(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries.parameter.value"></a>

- *Type:* object

---

##### `PutRecommendationApplicationIntervals` <a name="PutRecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals"></a>

```csharp
private void PutRecommendationApplicationIntervals(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals.parameter.value"></a>

- *Type:* object

---

##### `PutRecommendationApplicationMinThreshold` <a name="PutRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold"></a>

```csharp
private void PutRecommendationApplicationMinThreshold(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold.parameter.value"></a>

- *Type:* object

---

##### `PutRecommendationApplicationOverheadValues` <a name="PutRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues"></a>

```csharp
private void PutRecommendationApplicationOverheadValues(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues.parameter.value"></a>

- *Type:* object

---

##### `ResetAttachWorkloads` <a name="ResetAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads"></a>

```csharp
private void ResetAttachWorkloads()
```

##### `ResetDetachWorkloads` <a name="ResetDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads"></a>

```csharp
private void ResetDetachWorkloads()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOceanId` <a name="ResetOceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId"></a>

```csharp
private void ResetOceanId()
```

##### `ResetRecommendationApplicationBoundaries` <a name="ResetRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries"></a>

```csharp
private void ResetRecommendationApplicationBoundaries()
```

##### `ResetRecommendationApplicationMinThreshold` <a name="ResetRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold"></a>

```csharp
private void ResetRecommendationApplicationMinThreshold()
```

##### `ResetRecommendationApplicationOverheadValues` <a name="ResetRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues"></a>

```csharp
private void ResetRecommendationApplicationOverheadValues()
```

##### `ResetRestartPods` <a name="ResetRestartPods" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartPods"></a>

```csharp
private void ResetRestartPods()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanRightSizingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanRightSizingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanRightSizingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanRightSizingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanRightSizingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanRightSizingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceanRightSizingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads">AttachWorkloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads">DetachWorkloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries">RecommendationApplicationBoundaries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals">RecommendationApplicationIntervals</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold">RecommendationApplicationMinThreshold</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues">RecommendationApplicationOverheadValues</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput">AttachWorkloadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput">DetachWorkloadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput">OceanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput">RecommendationApplicationBoundariesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput">RecommendationApplicationIntervalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput">RecommendationApplicationMinThresholdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput">RecommendationApplicationOverheadValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartPodsInput">RestartPodsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId">OceanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartPods">RestartPods</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AttachWorkloads`<sup>Required</sup> <a name="AttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads"></a>

```csharp
public OceanRightSizingRuleAttachWorkloadsList AttachWorkloads { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a>

---

##### `DetachWorkloads`<sup>Required</sup> <a name="DetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads"></a>

```csharp
public OceanRightSizingRuleDetachWorkloadsList DetachWorkloads { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a>

---

##### `RecommendationApplicationBoundaries`<sup>Required</sup> <a name="RecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationBoundariesList RecommendationApplicationBoundaries { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a>

---

##### `RecommendationApplicationIntervals`<sup>Required</sup> <a name="RecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationIntervalsList RecommendationApplicationIntervals { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a>

---

##### `RecommendationApplicationMinThreshold`<sup>Required</sup> <a name="RecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationMinThresholdList RecommendationApplicationMinThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a>

---

##### `RecommendationApplicationOverheadValues`<sup>Required</sup> <a name="RecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationOverheadValuesList RecommendationApplicationOverheadValues { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a>

---

##### `AttachWorkloadsInput`<sup>Optional</sup> <a name="AttachWorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput"></a>

```csharp
public object AttachWorkloadsInput { get; }
```

- *Type:* object

---

##### `DetachWorkloadsInput`<sup>Optional</sup> <a name="DetachWorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput"></a>

```csharp
public object DetachWorkloadsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OceanIdInput`<sup>Optional</sup> <a name="OceanIdInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput"></a>

```csharp
public string OceanIdInput { get; }
```

- *Type:* string

---

##### `RecommendationApplicationBoundariesInput`<sup>Optional</sup> <a name="RecommendationApplicationBoundariesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput"></a>

```csharp
public object RecommendationApplicationBoundariesInput { get; }
```

- *Type:* object

---

##### `RecommendationApplicationIntervalsInput`<sup>Optional</sup> <a name="RecommendationApplicationIntervalsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput"></a>

```csharp
public object RecommendationApplicationIntervalsInput { get; }
```

- *Type:* object

---

##### `RecommendationApplicationMinThresholdInput`<sup>Optional</sup> <a name="RecommendationApplicationMinThresholdInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput"></a>

```csharp
public object RecommendationApplicationMinThresholdInput { get; }
```

- *Type:* object

---

##### `RecommendationApplicationOverheadValuesInput`<sup>Optional</sup> <a name="RecommendationApplicationOverheadValuesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput"></a>

```csharp
public object RecommendationApplicationOverheadValuesInput { get; }
```

- *Type:* object

---

##### `RestartPodsInput`<sup>Optional</sup> <a name="RestartPodsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartPodsInput"></a>

```csharp
public object RestartPodsInput { get; }
```

- *Type:* object

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OceanId`<sup>Required</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId"></a>

```csharp
public string OceanId { get; }
```

- *Type:* string

---

##### `RestartPods`<sup>Required</sup> <a name="RestartPods" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartPods"></a>

```csharp
public object RestartPods { get; }
```

- *Type:* object

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanRightSizingRuleAttachWorkloads <a name="OceanRightSizingRuleAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloads {
    object Namespaces
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces">Namespaces</a></code> | <code>object</code> | namespaces block. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces"></a>

```csharp
public object Namespaces { get; set; }
```

- *Type:* object

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleAttachWorkloadsNamespaces <a name="OceanRightSizingRuleAttachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespaces {
    string NamespaceName,
    object Labels = null,
    object Workloads = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads">Workloads</a></code> | <code>object</code> | workloads block. |

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `Workloads`<sup>Optional</sup> <a name="Workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads"></a>

```csharp
public object Workloads { get; set; }
```

- *Type:* object

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleAttachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesLabels {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads {
    string WorkloadType,
    string RegexName = null,
    string WorkloadName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName">RegexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName">WorkloadName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `RegexName`<sup>Optional</sup> <a name="RegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName"></a>

```csharp
public string RegexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `WorkloadName`<sup>Optional</sup> <a name="WorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```csharp
public string WorkloadName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleConfig <a name="OceanRightSizingRuleConfig" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object RecommendationApplicationIntervals,
    string RuleName,
    object AttachWorkloads = null,
    object DetachWorkloads = null,
    string Id = null,
    string OceanId = null,
    object RecommendationApplicationBoundaries = null,
    object RecommendationApplicationMinThreshold = null,
    object RecommendationApplicationOverheadValues = null,
    object RestartPods = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals">RecommendationApplicationIntervals</a></code> | <code>object</code> | recommendation_application_intervals block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads">AttachWorkloads</a></code> | <code>object</code> | attach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads">DetachWorkloads</a></code> | <code>object</code> | detach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId">OceanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries">RecommendationApplicationBoundaries</a></code> | <code>object</code> | recommendation_application_boundaries block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold">RecommendationApplicationMinThreshold</a></code> | <code>object</code> | recommendation_application_min_threshold block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues">RecommendationApplicationOverheadValues</a></code> | <code>object</code> | recommendation_application_overhead_values block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartPods">RestartPods</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#restart_pods OceanRightSizingRule#restart_pods}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RecommendationApplicationIntervals`<sup>Required</sup> <a name="RecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals"></a>

```csharp
public object RecommendationApplicationIntervals { get; set; }
```

- *Type:* object

recommendation_application_intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#recommendation_application_intervals OceanRightSizingRule#recommendation_application_intervals}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}.

---

##### `AttachWorkloads`<sup>Optional</sup> <a name="AttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads"></a>

```csharp
public object AttachWorkloads { get; set; }
```

- *Type:* object

attach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#attach_workloads OceanRightSizingRule#attach_workloads}

---

##### `DetachWorkloads`<sup>Optional</sup> <a name="DetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads"></a>

```csharp
public object DetachWorkloads { get; set; }
```

- *Type:* object

detach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#detach_workloads OceanRightSizingRule#detach_workloads}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OceanId`<sup>Optional</sup> <a name="OceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId"></a>

```csharp
public string OceanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}.

---

##### `RecommendationApplicationBoundaries`<sup>Optional</sup> <a name="RecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries"></a>

```csharp
public object RecommendationApplicationBoundaries { get; set; }
```

- *Type:* object

recommendation_application_boundaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#recommendation_application_boundaries OceanRightSizingRule#recommendation_application_boundaries}

---

##### `RecommendationApplicationMinThreshold`<sup>Optional</sup> <a name="RecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold"></a>

```csharp
public object RecommendationApplicationMinThreshold { get; set; }
```

- *Type:* object

recommendation_application_min_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#recommendation_application_min_threshold OceanRightSizingRule#recommendation_application_min_threshold}

---

##### `RecommendationApplicationOverheadValues`<sup>Optional</sup> <a name="RecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues"></a>

```csharp
public object RecommendationApplicationOverheadValues { get; set; }
```

- *Type:* object

recommendation_application_overhead_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#recommendation_application_overhead_values OceanRightSizingRule#recommendation_application_overhead_values}

---

##### `RestartPods`<sup>Optional</sup> <a name="RestartPods" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartPods"></a>

```csharp
public object RestartPods { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#restart_pods OceanRightSizingRule#restart_pods}.

---

### OceanRightSizingRuleDetachWorkloads <a name="OceanRightSizingRuleDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloads {
    object Namespaces
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces">Namespaces</a></code> | <code>object</code> | namespaces block. |

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces"></a>

```csharp
public object Namespaces { get; set; }
```

- *Type:* object

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleDetachWorkloadsNamespaces <a name="OceanRightSizingRuleDetachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespaces {
    string NamespaceName,
    object Labels = null,
    object Workloads = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads">Workloads</a></code> | <code>object</code> | workloads block. |

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `Workloads`<sup>Optional</sup> <a name="Workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads"></a>

```csharp
public object Workloads { get; set; }
```

- *Type:* object

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleDetachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesLabels {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads {
    string WorkloadType,
    string RegexName = null,
    string WorkloadName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName">RegexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName">WorkloadName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `RegexName`<sup>Optional</sup> <a name="RegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName"></a>

```csharp
public string RegexName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `WorkloadName`<sup>Optional</sup> <a name="WorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```csharp
public string WorkloadName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleRecommendationApplicationBoundaries <a name="OceanRightSizingRuleRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationBoundaries {
    double CpuMax = null,
    double CpuMin = null,
    double MemoryMax = null,
    double MemoryMin = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax">CpuMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin">CpuMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax">MemoryMax</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin">MemoryMin</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}. |

---

##### `CpuMax`<sup>Optional</sup> <a name="CpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax"></a>

```csharp
public double CpuMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}.

---

##### `CpuMin`<sup>Optional</sup> <a name="CpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin"></a>

```csharp
public double CpuMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}.

---

##### `MemoryMax`<sup>Optional</sup> <a name="MemoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax"></a>

```csharp
public double MemoryMax { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}.

---

##### `MemoryMin`<sup>Optional</sup> <a name="MemoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin"></a>

```csharp
public double MemoryMin { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}.

---

### OceanRightSizingRuleRecommendationApplicationIntervals <a name="OceanRightSizingRuleRecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervals {
    string RepetitionBasis,
    object MonthlyRepetitionBasis = null,
    object WeeklyRepetitionBasis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis">RepetitionBasis</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis">MonthlyRepetitionBasis</a></code> | <code>object</code> | monthly_repetition_basis block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis">WeeklyRepetitionBasis</a></code> | <code>object</code> | weekly_repetition_basis block. |

---

##### `RepetitionBasis`<sup>Required</sup> <a name="RepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis"></a>

```csharp
public string RepetitionBasis { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}.

---

##### `MonthlyRepetitionBasis`<sup>Optional</sup> <a name="MonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis"></a>

```csharp
public object MonthlyRepetitionBasis { get; set; }
```

- *Type:* object

monthly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#monthly_repetition_basis OceanRightSizingRule#monthly_repetition_basis}

---

##### `WeeklyRepetitionBasis`<sup>Optional</sup> <a name="WeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis"></a>

```csharp
public object WeeklyRepetitionBasis { get; set; }
```

- *Type:* object

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis {
    double[] IntervalMonths,
    string[] WeekOfTheMonth,
    object WeeklyRepetitionBasis = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths">IntervalMonths</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth">WeekOfTheMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis">WeeklyRepetitionBasis</a></code> | <code>object</code> | weekly_repetition_basis block. |

---

##### `IntervalMonths`<sup>Required</sup> <a name="IntervalMonths" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths"></a>

```csharp
public double[] IntervalMonths { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}.

---

##### `WeekOfTheMonth`<sup>Required</sup> <a name="WeekOfTheMonth" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth"></a>

```csharp
public string[] WeekOfTheMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}.

---

##### `WeeklyRepetitionBasis`<sup>Optional</sup> <a name="WeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis"></a>

```csharp
public object WeeklyRepetitionBasis { get; set; }
```

- *Type:* object

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis {
    string[] IntervalDays,
    string IntervalHoursEndTime,
    string IntervalHoursStartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays">IntervalDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime">IntervalHoursEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime">IntervalHoursStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays"></a>

```csharp
public string[] IntervalDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `IntervalHoursEndTime`<sup>Required</sup> <a name="IntervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```csharp
public string IntervalHoursEndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `IntervalHoursStartTime`<sup>Required</sup> <a name="IntervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```csharp
public string IntervalHoursStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis {
    string[] IntervalDays,
    string IntervalHoursEndTime,
    string IntervalHoursStartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays">IntervalDays</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime">IntervalHoursEndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime">IntervalHoursStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays"></a>

```csharp
public string[] IntervalDays { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `IntervalHoursEndTime`<sup>Required</sup> <a name="IntervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```csharp
public string IntervalHoursEndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `IntervalHoursStartTime`<sup>Required</sup> <a name="IntervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```csharp
public string IntervalHoursStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationMinThreshold <a name="OceanRightSizingRuleRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationMinThreshold {
    double CpuPercentage = null,
    double MemoryPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage">MemoryPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `CpuPercentage`<sup>Optional</sup> <a name="CpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `MemoryPercentage`<sup>Optional</sup> <a name="MemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage"></a>

```csharp
public double MemoryPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

### OceanRightSizingRuleRecommendationApplicationOverheadValues <a name="OceanRightSizingRuleRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationOverheadValues {
    double CpuPercentage = null,
    double MemoryPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage">MemoryPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `CpuPercentage`<sup>Optional</sup> <a name="CpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `MemoryPercentage`<sup>Optional</sup> <a name="MemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage"></a>

```csharp
public double MemoryPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.188.1/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanRightSizingRuleAttachWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get"></a>

```csharp
private OceanRightSizingRuleAttachWorkloadsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get"></a>

```csharp
private OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get"></a>

```csharp
private OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads">PutWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads">ResetWorkloads</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutWorkloads` <a name="PutWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```csharp
private void PutWorkloads(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* object

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetWorkloads` <a name="ResetWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```csharp
private void ResetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads">Workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput">WorkloadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels"></a>

```csharp
public OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a>

---

##### `Workloads`<sup>Required</sup> <a name="Workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads"></a>

```csharp
public OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList Workloads { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `WorkloadsInput`<sup>Optional</sup> <a name="WorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```csharp
public object WorkloadsInput { get; }
```

- *Type:* object

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get"></a>

```csharp
private OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">ResetRegexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">ResetWorkloadName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegexName` <a name="ResetRegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```csharp
private void ResetRegexName()
```

##### `ResetWorkloadName` <a name="ResetWorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```csharp
private void ResetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">RegexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">WorkloadNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">RegexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">WorkloadName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexNameInput`<sup>Optional</sup> <a name="RegexNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```csharp
public string RegexNameInput { get; }
```

- *Type:* string

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```csharp
public string WorkloadNameInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `RegexName`<sup>Required</sup> <a name="RegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```csharp
public string RegexName { get; }
```

- *Type:* string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```csharp
public string WorkloadName { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleAttachWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleAttachWorkloadsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces">PutNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespaces` <a name="PutNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces"></a>

```csharp
private void PutNamespaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces">Namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces"></a>

```csharp
public OceanRightSizingRuleAttachWorkloadsNamespacesList Namespaces { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a>

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput"></a>

```csharp
public object NamespacesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get"></a>

```csharp
private OceanRightSizingRuleDetachWorkloadsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get"></a>

```csharp
private OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get"></a>

```csharp
private OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads">PutWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads">ResetWorkloads</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutWorkloads` <a name="PutWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```csharp
private void PutWorkloads(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* object

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetWorkloads` <a name="ResetWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```csharp
private void ResetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads">Workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput">WorkloadsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels"></a>

```csharp
public OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a>

---

##### `Workloads`<sup>Required</sup> <a name="Workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads"></a>

```csharp
public OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList Workloads { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `WorkloadsInput`<sup>Optional</sup> <a name="WorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```csharp
public object WorkloadsInput { get; }
```

- *Type:* object

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get"></a>

```csharp
private OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">ResetRegexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">ResetWorkloadName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegexName` <a name="ResetRegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```csharp
private void ResetRegexName()
```

##### `ResetWorkloadName` <a name="ResetWorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```csharp
private void ResetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">RegexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">WorkloadNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">RegexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">WorkloadName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexNameInput`<sup>Optional</sup> <a name="RegexNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```csharp
public string RegexNameInput { get; }
```

- *Type:* string

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```csharp
public string WorkloadNameInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `RegexName`<sup>Required</sup> <a name="RegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```csharp
public string RegexName { get; }
```

- *Type:* string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```csharp
public string WorkloadName { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleDetachWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleDetachWorkloadsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces">PutNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespaces` <a name="PutNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces"></a>

```csharp
private void PutNamespaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces">Namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces"></a>

```csharp
public OceanRightSizingRuleDetachWorkloadsNamespacesList Namespaces { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a>

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput"></a>

```csharp
public object NamespacesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationBoundariesList <a name="OceanRightSizingRuleRecommendationApplicationBoundariesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationBoundariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax">ResetCpuMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin">ResetCpuMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax">ResetMemoryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin">ResetMemoryMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuMax` <a name="ResetCpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax"></a>

```csharp
private void ResetCpuMax()
```

##### `ResetCpuMin` <a name="ResetCpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin"></a>

```csharp
private void ResetCpuMin()
```

##### `ResetMemoryMax` <a name="ResetMemoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax"></a>

```csharp
private void ResetMemoryMax()
```

##### `ResetMemoryMin` <a name="ResetMemoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin"></a>

```csharp
private void ResetMemoryMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput">CpuMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput">CpuMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput">MemoryMaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput">MemoryMinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax">CpuMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin">CpuMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax">MemoryMax</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin">MemoryMin</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuMaxInput`<sup>Optional</sup> <a name="CpuMaxInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput"></a>

```csharp
public double CpuMaxInput { get; }
```

- *Type:* double

---

##### `CpuMinInput`<sup>Optional</sup> <a name="CpuMinInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput"></a>

```csharp
public double CpuMinInput { get; }
```

- *Type:* double

---

##### `MemoryMaxInput`<sup>Optional</sup> <a name="MemoryMaxInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput"></a>

```csharp
public double MemoryMaxInput { get; }
```

- *Type:* double

---

##### `MemoryMinInput`<sup>Optional</sup> <a name="MemoryMinInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput"></a>

```csharp
public double MemoryMinInput { get; }
```

- *Type:* double

---

##### `CpuMax`<sup>Required</sup> <a name="CpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax"></a>

```csharp
public double CpuMax { get; }
```

- *Type:* double

---

##### `CpuMin`<sup>Required</sup> <a name="CpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin"></a>

```csharp
public double CpuMin { get; }
```

- *Type:* double

---

##### `MemoryMax`<sup>Required</sup> <a name="MemoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax"></a>

```csharp
public double MemoryMax { get; }
```

- *Type:* double

---

##### `MemoryMin`<sup>Required</sup> <a name="MemoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin"></a>

```csharp
public double MemoryMin { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis">PutWeeklyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis">ResetWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWeeklyRepetitionBasis` <a name="PutWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis"></a>

```csharp
private void PutWeeklyRepetitionBasis(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* object

---

##### `ResetWeeklyRepetitionBasis` <a name="ResetWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis"></a>

```csharp
private void ResetWeeklyRepetitionBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis">WeeklyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput">IntervalMonthsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput">WeeklyRepetitionBasisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput">WeekOfTheMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths">IntervalMonths</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth">WeekOfTheMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WeeklyRepetitionBasis`<sup>Required</sup> <a name="WeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList WeeklyRepetitionBasis { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a>

---

##### `IntervalMonthsInput`<sup>Optional</sup> <a name="IntervalMonthsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput"></a>

```csharp
public double[] IntervalMonthsInput { get; }
```

- *Type:* double[]

---

##### `WeeklyRepetitionBasisInput`<sup>Optional</sup> <a name="WeeklyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput"></a>

```csharp
public object WeeklyRepetitionBasisInput { get; }
```

- *Type:* object

---

##### `WeekOfTheMonthInput`<sup>Optional</sup> <a name="WeekOfTheMonthInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput"></a>

```csharp
public string[] WeekOfTheMonthInput { get; }
```

- *Type:* string[]

---

##### `IntervalMonths`<sup>Required</sup> <a name="IntervalMonths" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths"></a>

```csharp
public double[] IntervalMonths { get; }
```

- *Type:* double[]

---

##### `WeekOfTheMonth`<sup>Required</sup> <a name="WeekOfTheMonth" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth"></a>

```csharp
public string[] WeekOfTheMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">IntervalDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">IntervalHoursEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">IntervalHoursStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays">IntervalDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">IntervalHoursEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">IntervalHoursStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalDaysInput`<sup>Optional</sup> <a name="IntervalDaysInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```csharp
public string[] IntervalDaysInput { get; }
```

- *Type:* string[]

---

##### `IntervalHoursEndTimeInput`<sup>Optional</sup> <a name="IntervalHoursEndTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```csharp
public string IntervalHoursEndTimeInput { get; }
```

- *Type:* string

---

##### `IntervalHoursStartTimeInput`<sup>Optional</sup> <a name="IntervalHoursStartTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```csharp
public string IntervalHoursStartTimeInput { get; }
```

- *Type:* string

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```csharp
public string[] IntervalDays { get; }
```

- *Type:* string[]

---

##### `IntervalHoursEndTime`<sup>Required</sup> <a name="IntervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```csharp
public string IntervalHoursEndTime { get; }
```

- *Type:* string

---

##### `IntervalHoursStartTime`<sup>Required</sup> <a name="IntervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```csharp
public string IntervalHoursStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis">PutMonthlyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis">PutWeeklyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis">ResetMonthlyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis">ResetWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMonthlyRepetitionBasis` <a name="PutMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis"></a>

```csharp
private void PutMonthlyRepetitionBasis(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis.parameter.value"></a>

- *Type:* object

---

##### `PutWeeklyRepetitionBasis` <a name="PutWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis"></a>

```csharp
private void PutWeeklyRepetitionBasis(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* object

---

##### `ResetMonthlyRepetitionBasis` <a name="ResetMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis"></a>

```csharp
private void ResetMonthlyRepetitionBasis()
```

##### `ResetWeeklyRepetitionBasis` <a name="ResetWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis"></a>

```csharp
private void ResetWeeklyRepetitionBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis">MonthlyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis">WeeklyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput">MonthlyRepetitionBasisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput">RepetitionBasisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput">WeeklyRepetitionBasisInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis">RepetitionBasis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MonthlyRepetitionBasis`<sup>Required</sup> <a name="MonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList MonthlyRepetitionBasis { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a>

---

##### `WeeklyRepetitionBasis`<sup>Required</sup> <a name="WeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis"></a>

```csharp
public OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList WeeklyRepetitionBasis { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a>

---

##### `MonthlyRepetitionBasisInput`<sup>Optional</sup> <a name="MonthlyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput"></a>

```csharp
public object MonthlyRepetitionBasisInput { get; }
```

- *Type:* object

---

##### `RepetitionBasisInput`<sup>Optional</sup> <a name="RepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput"></a>

```csharp
public string RepetitionBasisInput { get; }
```

- *Type:* string

---

##### `WeeklyRepetitionBasisInput`<sup>Optional</sup> <a name="WeeklyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput"></a>

```csharp
public object WeeklyRepetitionBasisInput { get; }
```

- *Type:* object

---

##### `RepetitionBasis`<sup>Required</sup> <a name="RepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis"></a>

```csharp
public string RepetitionBasis { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">IntervalDaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">IntervalHoursEndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">IntervalHoursStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays">IntervalDays</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">IntervalHoursEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">IntervalHoursStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalDaysInput`<sup>Optional</sup> <a name="IntervalDaysInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```csharp
public string[] IntervalDaysInput { get; }
```

- *Type:* string[]

---

##### `IntervalHoursEndTimeInput`<sup>Optional</sup> <a name="IntervalHoursEndTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```csharp
public string IntervalHoursEndTimeInput { get; }
```

- *Type:* string

---

##### `IntervalHoursStartTimeInput`<sup>Optional</sup> <a name="IntervalHoursStartTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```csharp
public string IntervalHoursStartTimeInput { get; }
```

- *Type:* string

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```csharp
public string[] IntervalDays { get; }
```

- *Type:* string[]

---

##### `IntervalHoursEndTime`<sup>Required</sup> <a name="IntervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```csharp
public string IntervalHoursEndTime { get; }
```

- *Type:* string

---

##### `IntervalHoursStartTime`<sup>Required</sup> <a name="IntervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```csharp
public string IntervalHoursStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdList <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationMinThresholdList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage">ResetCpuPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage">ResetMemoryPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPercentage` <a name="ResetCpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage"></a>

```csharp
private void ResetCpuPercentage()
```

##### `ResetMemoryPercentage` <a name="ResetMemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage"></a>

```csharp
private void ResetMemoryPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput">CpuPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput">MemoryPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage">MemoryPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPercentageInput`<sup>Optional</sup> <a name="CpuPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput"></a>

```csharp
public double CpuPercentageInput { get; }
```

- *Type:* double

---

##### `MemoryPercentageInput`<sup>Optional</sup> <a name="MemoryPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput"></a>

```csharp
public double MemoryPercentageInput { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `MemoryPercentage`<sup>Required</sup> <a name="MemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage"></a>

```csharp
public double MemoryPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesList <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationOverheadValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get"></a>

```csharp
private OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage">ResetCpuPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage">ResetMemoryPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuPercentage` <a name="ResetCpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage"></a>

```csharp
private void ResetCpuPercentage()
```

##### `ResetMemoryPercentage` <a name="ResetMemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage"></a>

```csharp
private void ResetMemoryPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput">CpuPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput">MemoryPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage">CpuPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage">MemoryPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuPercentageInput`<sup>Optional</sup> <a name="CpuPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput"></a>

```csharp
public double CpuPercentageInput { get; }
```

- *Type:* double

---

##### `MemoryPercentageInput`<sup>Optional</sup> <a name="MemoryPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput"></a>

```csharp
public double MemoryPercentageInput { get; }
```

- *Type:* double

---

##### `CpuPercentage`<sup>Required</sup> <a name="CpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage"></a>

```csharp
public double CpuPercentage { get; }
```

- *Type:* double

---

##### `MemoryPercentage`<sup>Required</sup> <a name="MemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage"></a>

```csharp
public double MemoryPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



