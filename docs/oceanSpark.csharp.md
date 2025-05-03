# `oceanSpark` Submodule <a name="`oceanSpark` Submodule" id="@cdktf/provider-spotinst.oceanSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSpark <a name="OceanSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark spotinst_ocean_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSpark(Construct Scope, string Id, OceanSparkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute">PutCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress">PutIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection">PutLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark">PutSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook">PutWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces">PutWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection">ResetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark">ResetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook">ResetWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWorkspaces">ResetWorkspaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompute` <a name="PutCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute"></a>

```csharp
private void PutCompute(OceanSparkCompute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `PutIngress` <a name="PutIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress"></a>

```csharp
private void PutIngress(OceanSparkIngress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `PutLogCollection` <a name="PutLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection"></a>

```csharp
private void PutLogCollection(OceanSparkLogCollection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `PutSpark` <a name="PutSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark"></a>

```csharp
private void PutSpark(OceanSparkSpark Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `PutWebhook` <a name="PutWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook"></a>

```csharp
private void PutWebhook(OceanSparkWebhook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `PutWorkspaces` <a name="PutWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces"></a>

```csharp
private void PutWorkspaces(OceanSparkWorkspaces Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWorkspaces.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---

##### `ResetCompute` <a name="ResetCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute"></a>

```csharp
private void ResetCompute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress"></a>

```csharp
private void ResetIngress()
```

##### `ResetLogCollection` <a name="ResetLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection"></a>

```csharp
private void ResetLogCollection()
```

##### `ResetSpark` <a name="ResetSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark"></a>

```csharp
private void ResetSpark()
```

##### `ResetWebhook` <a name="ResetWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook"></a>

```csharp
private void ResetWebhook()
```

##### `ResetWorkspaces` <a name="ResetWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWorkspaces"></a>

```csharp
private void ResetWorkspaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSpark.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSpark.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSpark.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceanSpark.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanSpark to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceanSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection">LogCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspaces">Workspaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference">OceanSparkWorkspacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput">ComputeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput">IngressInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput">LogCollectionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput">OceanClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput">SparkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput">WebhookInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspacesInput">WorkspacesInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId">OceanClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute"></a>

```csharp
public OceanSparkComputeOutputReference Compute { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a>

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress"></a>

```csharp
public OceanSparkIngressOutputReference Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a>

---

##### `LogCollection`<sup>Required</sup> <a name="LogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection"></a>

```csharp
public OceanSparkLogCollectionOutputReference LogCollection { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a>

---

##### `Spark`<sup>Required</sup> <a name="Spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark"></a>

```csharp
public OceanSparkSparkOutputReference Spark { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a>

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook"></a>

```csharp
public OceanSparkWebhookOutputReference Webhook { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a>

---

##### `Workspaces`<sup>Required</sup> <a name="Workspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspaces"></a>

```csharp
public OceanSparkWorkspacesOutputReference Workspaces { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference">OceanSparkWorkspacesOutputReference</a>

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput"></a>

```csharp
public OceanSparkCompute ComputeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput"></a>

```csharp
public OceanSparkIngress IngressInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `LogCollectionInput`<sup>Optional</sup> <a name="LogCollectionInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput"></a>

```csharp
public OceanSparkLogCollection LogCollectionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `OceanClusterIdInput`<sup>Optional</sup> <a name="OceanClusterIdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput"></a>

```csharp
public string OceanClusterIdInput { get; }
```

- *Type:* string

---

##### `SparkInput`<sup>Optional</sup> <a name="SparkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput"></a>

```csharp
public OceanSparkSpark SparkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput"></a>

```csharp
public OceanSparkWebhook WebhookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `WorkspacesInput`<sup>Optional</sup> <a name="WorkspacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.workspacesInput"></a>

```csharp
public OceanSparkWorkspaces WorkspacesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OceanClusterId`<sup>Required</sup> <a name="OceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId"></a>

```csharp
public string OceanClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkCompute <a name="OceanSparkCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkCompute {
    object CreateVngs = null,
    object UseTaints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs">CreateVngs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints">UseTaints</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}. |

---

##### `CreateVngs`<sup>Optional</sup> <a name="CreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs"></a>

```csharp
public object CreateVngs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

##### `UseTaints`<sup>Optional</sup> <a name="UseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints"></a>

```csharp
public object UseTaints { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

### OceanSparkConfig <a name="OceanSparkConfig" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OceanClusterId,
    OceanSparkCompute Compute = null,
    string Id = null,
    OceanSparkIngress Ingress = null,
    OceanSparkLogCollection LogCollection = null,
    OceanSparkSpark Spark = null,
    OceanSparkWebhook Webhook = null,
    OceanSparkWorkspaces Workspaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId">OceanClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute">Compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection">LogCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark">Spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook">Webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.workspaces">Workspaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | workspaces block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OceanClusterId`<sup>Required</sup> <a name="OceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId"></a>

```csharp
public string OceanClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute"></a>

```csharp
public OceanSparkCompute Compute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress"></a>

```csharp
public OceanSparkIngress Ingress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `LogCollection`<sup>Optional</sup> <a name="LogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection"></a>

```csharp
public OceanSparkLogCollection LogCollection { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `Spark`<sup>Optional</sup> <a name="Spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark"></a>

```csharp
public OceanSparkSpark Spark { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `Webhook`<sup>Optional</sup> <a name="Webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook"></a>

```csharp
public OceanSparkWebhook Webhook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

##### `Workspaces`<sup>Optional</sup> <a name="Workspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.workspaces"></a>

```csharp
public OceanSparkWorkspaces Workspaces { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

workspaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#workspaces OceanSpark#workspaces}

---

### OceanSparkIngress <a name="OceanSparkIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngress {
    OceanSparkIngressController Controller = null,
    OceanSparkIngressCustomEndpoint CustomEndpoint = null,
    OceanSparkIngressLoadBalancer LoadBalancer = null,
    OceanSparkIngressPrivateLink PrivateLink = null,
    System.Collections.Generic.IDictionary<string, string> ServiceAnnotations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller">Controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | controller block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |

---

##### `Controller`<sup>Optional</sup> <a name="Controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller"></a>

```csharp
public OceanSparkIngressController Controller { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#controller OceanSpark#controller}

---

##### `CustomEndpoint`<sup>Optional</sup> <a name="CustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint"></a>

```csharp
public OceanSparkIngressCustomEndpoint CustomEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

##### `LoadBalancer`<sup>Optional</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer"></a>

```csharp
public OceanSparkIngressLoadBalancer LoadBalancer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

##### `PrivateLink`<sup>Optional</sup> <a name="PrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink"></a>

```csharp
public OceanSparkIngressPrivateLink PrivateLink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

##### `ServiceAnnotations`<sup>Optional</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

### OceanSparkIngressController <a name="OceanSparkIngressController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressController {
    object Managed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed">Managed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

### OceanSparkIngressCustomEndpoint <a name="OceanSparkIngressCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressCustomEndpoint {
    string Address = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#address OceanSpark#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#address OceanSpark#address}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

### OceanSparkIngressLoadBalancer <a name="OceanSparkIngressLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressLoadBalancer {
    object Managed = null,
    System.Collections.Generic.IDictionary<string, string> ServiceAnnotations = null,
    string TargetGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed">Managed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#managed OceanSpark#managed}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}. |

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `ServiceAnnotations`<sup>Optional</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

### OceanSparkIngressPrivateLink <a name="OceanSparkIngressPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressPrivateLink {
    object Enabled = null,
    string VpcEndpointService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService">VpcEndpointService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `VpcEndpointService`<sup>Optional</sup> <a name="VpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService"></a>

```csharp
public string VpcEndpointService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

### OceanSparkLogCollection <a name="OceanSparkLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkLogCollection {
    object CollectAppLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs">CollectAppLogs</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}. |

---

##### `CollectAppLogs`<sup>Optional</sup> <a name="CollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs"></a>

```csharp
public object CollectAppLogs { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

### OceanSparkSpark <a name="OceanSparkSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkSpark {
    string[] AdditionalAppNamespaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces">AdditionalAppNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}. |

---

##### `AdditionalAppNamespaces`<sup>Optional</sup> <a name="AdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces"></a>

```csharp
public string[] AdditionalAppNamespaces { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

### OceanSparkWebhook <a name="OceanSparkWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWebhook {
    double[] HostNetworkPorts = null,
    object UseHostNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts">HostNetworkPorts</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork">UseHostNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}. |

---

##### `HostNetworkPorts`<sup>Optional</sup> <a name="HostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts"></a>

```csharp
public double[] HostNetworkPorts { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

##### `UseHostNetwork`<sup>Optional</sup> <a name="UseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork"></a>

```csharp
public object UseHostNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

### OceanSparkWorkspaces <a name="OceanSparkWorkspaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspaces {
    OceanSparkWorkspacesStorage Storage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | storage block. |

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces.property.storage"></a>

```csharp
public OceanSparkWorkspacesStorage Storage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#storage OceanSpark#storage}

---

### OceanSparkWorkspacesStorage <a name="OceanSparkWorkspacesStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspacesStorage {
    OceanSparkWorkspacesStorageDefaults Defaults = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | defaults block. |

---

##### `Defaults`<sup>Optional</sup> <a name="Defaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage.property.defaults"></a>

```csharp
public OceanSparkWorkspacesStorageDefaults Defaults { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#defaults OceanSpark#defaults}

---

### OceanSparkWorkspacesStorageDefaults <a name="OceanSparkWorkspacesStorageDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspacesStorageDefaults {
    string StorageClassName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.property.storageClassName">StorageClassName</a></code> | <code>string</code> | The name of the persistent volume storage class to use by default for new workspaces. |

---

##### `StorageClassName`<sup>Optional</sup> <a name="StorageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults.property.storageClassName"></a>

```csharp
public string StorageClassName { get; set; }
```

- *Type:* string

The name of the persistent volume storage class to use by default for new workspaces.

Leave it empty to use the cluster defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.0/docs/resources/ocean_spark#storage_class_name OceanSpark#storage_class_name}

---

## Classes <a name="Classes" id="Classes"></a>

### OceanSparkComputeOutputReference <a name="OceanSparkComputeOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkComputeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs">ResetCreateVngs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints">ResetUseTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreateVngs` <a name="ResetCreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs"></a>

```csharp
private void ResetCreateVngs()
```

##### `ResetUseTaints` <a name="ResetUseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints"></a>

```csharp
private void ResetUseTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput">CreateVngsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput">UseTaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs">CreateVngs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints">UseTaints</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateVngsInput`<sup>Optional</sup> <a name="CreateVngsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput"></a>

```csharp
public object CreateVngsInput { get; }
```

- *Type:* object

---

##### `UseTaintsInput`<sup>Optional</sup> <a name="UseTaintsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput"></a>

```csharp
public object UseTaintsInput { get; }
```

- *Type:* object

---

##### `CreateVngs`<sup>Required</sup> <a name="CreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs"></a>

```csharp
public object CreateVngs { get; }
```

- *Type:* object

---

##### `UseTaints`<sup>Required</sup> <a name="UseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints"></a>

```csharp
public object UseTaints { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue"></a>

```csharp
public OceanSparkCompute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---


### OceanSparkIngressControllerOutputReference <a name="OceanSparkIngressControllerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressControllerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged">ResetManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged"></a>

```csharp
private void ResetManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue"></a>

```csharp
public OceanSparkIngressController InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---


### OceanSparkIngressCustomEndpointOutputReference <a name="OceanSparkIngressCustomEndpointOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressCustomEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue"></a>

```csharp
public OceanSparkIngressCustomEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---


### OceanSparkIngressLoadBalancerOutputReference <a name="OceanSparkIngressLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations">ResetServiceAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetServiceAnnotations` <a name="ResetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations"></a>

```csharp
private void ResetServiceAnnotations()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput">ServiceAnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `ServiceAnnotationsInput`<sup>Optional</sup> <a name="ServiceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `ServiceAnnotations`<sup>Required</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public OceanSparkIngressLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---


### OceanSparkIngressOutputReference <a name="OceanSparkIngressOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController">PutController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint">PutCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer">PutLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink">PutPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController">ResetController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint">ResetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer">ResetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink">ResetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations">ResetServiceAnnotations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutController` <a name="PutController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController"></a>

```csharp
private void PutController(OceanSparkIngressController Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `PutCustomEndpoint` <a name="PutCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint"></a>

```csharp
private void PutCustomEndpoint(OceanSparkIngressCustomEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `PutLoadBalancer` <a name="PutLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer"></a>

```csharp
private void PutLoadBalancer(OceanSparkIngressLoadBalancer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `PutPrivateLink` <a name="PutPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink"></a>

```csharp
private void PutPrivateLink(OceanSparkIngressPrivateLink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `ResetController` <a name="ResetController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController"></a>

```csharp
private void ResetController()
```

##### `ResetCustomEndpoint` <a name="ResetCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint"></a>

```csharp
private void ResetCustomEndpoint()
```

##### `ResetLoadBalancer` <a name="ResetLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer"></a>

```csharp
private void ResetLoadBalancer()
```

##### `ResetPrivateLink` <a name="ResetPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink"></a>

```csharp
private void ResetPrivateLink()
```

##### `ResetServiceAnnotations` <a name="ResetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations"></a>

```csharp
private void ResetServiceAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller">Controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint">CustomEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink">PrivateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput">ControllerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput">CustomEndpointInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput">LoadBalancerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput">PrivateLinkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput">ServiceAnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations">ServiceAnnotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Controller`<sup>Required</sup> <a name="Controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller"></a>

```csharp
public OceanSparkIngressControllerOutputReference Controller { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a>

---

##### `CustomEndpoint`<sup>Required</sup> <a name="CustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint"></a>

```csharp
public OceanSparkIngressCustomEndpointOutputReference CustomEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a>

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer"></a>

```csharp
public OceanSparkIngressLoadBalancerOutputReference LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a>

---

##### `PrivateLink`<sup>Required</sup> <a name="PrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink"></a>

```csharp
public OceanSparkIngressPrivateLinkOutputReference PrivateLink { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a>

---

##### `ControllerInput`<sup>Optional</sup> <a name="ControllerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput"></a>

```csharp
public OceanSparkIngressController ControllerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `CustomEndpointInput`<sup>Optional</sup> <a name="CustomEndpointInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput"></a>

```csharp
public OceanSparkIngressCustomEndpoint CustomEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput"></a>

```csharp
public OceanSparkIngressLoadBalancer LoadBalancerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `PrivateLinkInput`<sup>Optional</sup> <a name="PrivateLinkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput"></a>

```csharp
public OceanSparkIngressPrivateLink PrivateLinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `ServiceAnnotationsInput`<sup>Optional</sup> <a name="ServiceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServiceAnnotations`<sup>Required</sup> <a name="ServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ServiceAnnotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue"></a>

```csharp
public OceanSparkIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---


### OceanSparkIngressPrivateLinkOutputReference <a name="OceanSparkIngressPrivateLinkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkIngressPrivateLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService">ResetVpcEndpointService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetVpcEndpointService` <a name="ResetVpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService"></a>

```csharp
private void ResetVpcEndpointService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput">VpcEndpointServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService">VpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `VpcEndpointServiceInput`<sup>Optional</sup> <a name="VpcEndpointServiceInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput"></a>

```csharp
public string VpcEndpointServiceInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `VpcEndpointService`<sup>Required</sup> <a name="VpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService"></a>

```csharp
public string VpcEndpointService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue"></a>

```csharp
public OceanSparkIngressPrivateLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---


### OceanSparkLogCollectionOutputReference <a name="OceanSparkLogCollectionOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkLogCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs">ResetCollectAppLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectAppLogs` <a name="ResetCollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs"></a>

```csharp
private void ResetCollectAppLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput">CollectAppLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs">CollectAppLogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectAppLogsInput`<sup>Optional</sup> <a name="CollectAppLogsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput"></a>

```csharp
public object CollectAppLogsInput { get; }
```

- *Type:* object

---

##### `CollectAppLogs`<sup>Required</sup> <a name="CollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs"></a>

```csharp
public object CollectAppLogs { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue"></a>

```csharp
public OceanSparkLogCollection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---


### OceanSparkSparkOutputReference <a name="OceanSparkSparkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkSparkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces">ResetAdditionalAppNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalAppNamespaces` <a name="ResetAdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces"></a>

```csharp
private void ResetAdditionalAppNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput">AdditionalAppNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces">AdditionalAppNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAppNamespacesInput`<sup>Optional</sup> <a name="AdditionalAppNamespacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput"></a>

```csharp
public string[] AdditionalAppNamespacesInput { get; }
```

- *Type:* string[]

---

##### `AdditionalAppNamespaces`<sup>Required</sup> <a name="AdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces"></a>

```csharp
public string[] AdditionalAppNamespaces { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue"></a>

```csharp
public OceanSparkSpark InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---


### OceanSparkWebhookOutputReference <a name="OceanSparkWebhookOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWebhookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts">ResetHostNetworkPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork">ResetUseHostNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostNetworkPorts` <a name="ResetHostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts"></a>

```csharp
private void ResetHostNetworkPorts()
```

##### `ResetUseHostNetwork` <a name="ResetUseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork"></a>

```csharp
private void ResetUseHostNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput">HostNetworkPortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput">UseHostNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts">HostNetworkPorts</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork">UseHostNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostNetworkPortsInput`<sup>Optional</sup> <a name="HostNetworkPortsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput"></a>

```csharp
public double[] HostNetworkPortsInput { get; }
```

- *Type:* double[]

---

##### `UseHostNetworkInput`<sup>Optional</sup> <a name="UseHostNetworkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput"></a>

```csharp
public object UseHostNetworkInput { get; }
```

- *Type:* object

---

##### `HostNetworkPorts`<sup>Required</sup> <a name="HostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts"></a>

```csharp
public double[] HostNetworkPorts { get; }
```

- *Type:* double[]

---

##### `UseHostNetwork`<sup>Required</sup> <a name="UseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork"></a>

```csharp
public object UseHostNetwork { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue"></a>

```csharp
public OceanSparkWebhook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---


### OceanSparkWorkspacesOutputReference <a name="OceanSparkWorkspacesOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage"></a>

```csharp
private void PutStorage(OceanSparkWorkspacesStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference">OceanSparkWorkspacesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storageInput">StorageInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storage"></a>

```csharp
public OceanSparkWorkspacesStorageOutputReference Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference">OceanSparkWorkspacesStorageOutputReference</a>

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.storageInput"></a>

```csharp
public OceanSparkWorkspacesStorage StorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesOutputReference.property.internalValue"></a>

```csharp
public OceanSparkWorkspaces InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspaces">OceanSparkWorkspaces</a>

---


### OceanSparkWorkspacesStorageDefaultsOutputReference <a name="OceanSparkWorkspacesStorageDefaultsOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspacesStorageDefaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resetStorageClassName">ResetStorageClassName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClassName` <a name="ResetStorageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.resetStorageClassName"></a>

```csharp
private void ResetStorageClassName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassNameInput">StorageClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassName">StorageClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageClassNameInput`<sup>Optional</sup> <a name="StorageClassNameInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassNameInput"></a>

```csharp
public string StorageClassNameInput { get; }
```

- *Type:* string

---

##### `StorageClassName`<sup>Required</sup> <a name="StorageClassName" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.storageClassName"></a>

```csharp
public string StorageClassName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference.property.internalValue"></a>

```csharp
public OceanSparkWorkspacesStorageDefaults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---


### OceanSparkWorkspacesStorageOutputReference <a name="OceanSparkWorkspacesStorageOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceanSparkWorkspacesStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults">PutDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resetDefaults">ResetDefaults</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaults` <a name="PutDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults"></a>

```csharp
private void PutDefaults(OceanSparkWorkspacesStorageDefaults Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.putDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---

##### `ResetDefaults` <a name="ResetDefaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.resetDefaults"></a>

```csharp
private void ResetDefaults()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaults">Defaults</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference">OceanSparkWorkspacesStorageDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaultsInput">DefaultsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Defaults`<sup>Required</sup> <a name="Defaults" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaults"></a>

```csharp
public OceanSparkWorkspacesStorageDefaultsOutputReference Defaults { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaultsOutputReference">OceanSparkWorkspacesStorageDefaultsOutputReference</a>

---

##### `DefaultsInput`<sup>Optional</sup> <a name="DefaultsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.defaultsInput"></a>

```csharp
public OceanSparkWorkspacesStorageDefaults DefaultsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageDefaults">OceanSparkWorkspacesStorageDefaults</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorageOutputReference.property.internalValue"></a>

```csharp
public OceanSparkWorkspacesStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWorkspacesStorage">OceanSparkWorkspacesStorage</a>

---



