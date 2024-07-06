# `oceancdStrategy` Submodule <a name="`oceancdStrategy` Submodule" id="@cdktf/provider-spotinst.oceancdStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdStrategy <a name="OceancdStrategy" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy spotinst_oceancd_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategy(Construct Scope, string Id, OceancdStrategyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary">PutCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling">PutRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary">ResetCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling">ResetRolling</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCanary` <a name="PutCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary"></a>

```csharp
private void PutCanary(OceancdStrategyCanary Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `PutRolling` <a name="PutRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling"></a>

```csharp
private void PutRolling(OceancdStrategyRolling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `ResetCanary` <a name="ResetCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary"></a>

```csharp
private void ResetCanary()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRolling` <a name="ResetRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling"></a>

```csharp
private void ResetRolling()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdStrategy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdStrategy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdStrategy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdStrategy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdStrategy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceancdStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput">CanaryInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput">RollingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput">StrategyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName">StrategyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Canary`<sup>Required</sup> <a name="Canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary"></a>

```csharp
public OceancdStrategyCanaryOutputReference Canary { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a>

---

##### `Rolling`<sup>Required</sup> <a name="Rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling"></a>

```csharp
public OceancdStrategyRollingOutputReference Rolling { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a>

---

##### `CanaryInput`<sup>Optional</sup> <a name="CanaryInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput"></a>

```csharp
public OceancdStrategyCanary CanaryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RollingInput`<sup>Optional</sup> <a name="RollingInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput"></a>

```csharp
public OceancdStrategyRolling RollingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `StrategyNameInput`<sup>Optional</sup> <a name="StrategyNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput"></a>

```csharp
public string StrategyNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName"></a>

```csharp
public string StrategyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdStrategyCanary <a name="OceancdStrategyCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanary {
    object Steps,
    OceancdStrategyCanaryBackgroundVerification BackgroundVerification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps">Steps</a></code> | <code>object</code> | steps block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification">BackgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | background_verification block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

##### `BackgroundVerification`<sup>Optional</sup> <a name="BackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification"></a>

```csharp
public OceancdStrategyCanaryBackgroundVerification BackgroundVerification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

background_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}

---

### OceancdStrategyCanaryBackgroundVerification <a name="OceancdStrategyCanaryBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryBackgroundVerification {
    string[] TemplateNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyCanarySteps <a name="OceancdStrategyCanarySteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanarySteps {
    OceancdStrategyCanaryStepsPause Pause = null,
    OceancdStrategyCanaryStepsSetCanaryScale SetCanaryScale = null,
    OceancdStrategyCanaryStepsSetHeaderRoute SetHeaderRoute = null,
    double SetWeight = null,
    string StepName = null,
    OceancdStrategyCanaryStepsVerification Verification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale">SetCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | set_canary_scale block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute">SetHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | set_header_route block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight">SetWeight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName">StepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | verification block. |

---

##### `Pause`<sup>Optional</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause"></a>

```csharp
public OceancdStrategyCanaryStepsPause Pause { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `SetCanaryScale`<sup>Optional</sup> <a name="SetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale"></a>

```csharp
public OceancdStrategyCanaryStepsSetCanaryScale SetCanaryScale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

set_canary_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#set_canary_scale OceancdStrategy#set_canary_scale}

---

##### `SetHeaderRoute`<sup>Optional</sup> <a name="SetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRoute SetHeaderRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

set_header_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#set_header_route OceancdStrategy#set_header_route}

---

##### `SetWeight`<sup>Optional</sup> <a name="SetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight"></a>

```csharp
public double SetWeight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}.

---

##### `StepName`<sup>Optional</sup> <a name="StepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName"></a>

```csharp
public string StepName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}.

---

##### `Verification`<sup>Optional</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification"></a>

```csharp
public OceancdStrategyCanaryStepsVerification Verification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyCanaryStepsPause <a name="OceancdStrategyCanaryStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsPause {
    string Duration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyCanaryStepsSetCanaryScale <a name="OceancdStrategyCanaryStepsSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetCanaryScale {
    object MatchTrafficWeight = null,
    double Replicas = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight">MatchTrafficWeight</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas">Replicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}. |

---

##### `MatchTrafficWeight`<sup>Optional</sup> <a name="MatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight"></a>

```csharp
public object MatchTrafficWeight { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}.

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}.

---

### OceancdStrategyCanaryStepsSetHeaderRoute <a name="OceancdStrategyCanaryStepsSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRoute {
    string HeaderRouteName,
    object Match
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName">HeaderRouteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match">Match</a></code> | <code>object</code> | match block. |

---

##### `HeaderRouteName`<sup>Required</sup> <a name="HeaderRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName"></a>

```csharp
public string HeaderRouteName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}.

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match"></a>

```csharp
public object Match { get; set; }
```

- *Type:* object

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#match OceancdStrategy#match}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatch <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteMatch {
    string HeaderName,
    OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue HeaderValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue">HeaderValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | header_value block. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}.

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue HeaderValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

header_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#header_value OceancdStrategy#header_value}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue {
    string Exact = null,
    string Prefix = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}.

---

### OceancdStrategyCanaryStepsVerification <a name="OceancdStrategyCanaryStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsVerification {
    string[] TemplateNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyConfig <a name="OceancdStrategyConfig" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string StrategyName,
    OceancdStrategyCanary Canary = null,
    string Id = null,
    OceancdStrategyRolling Rolling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName">StrategyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary">Canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#id OceancdStrategy#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling">Rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | rolling block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName"></a>

```csharp
public string StrategyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}.

---

##### `Canary`<sup>Optional</sup> <a name="Canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary"></a>

```csharp
public OceancdStrategyCanary Canary { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#id OceancdStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rolling`<sup>Optional</sup> <a name="Rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling"></a>

```csharp
public OceancdStrategyRolling Rolling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}

---

### OceancdStrategyRolling <a name="OceancdStrategyRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRolling {
    object Steps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps">Steps</a></code> | <code>object</code> | steps block. |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

### OceancdStrategyRollingSteps <a name="OceancdStrategyRollingSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingSteps {
    OceancdStrategyRollingStepsPause Pause = null,
    string StepsName = null,
    OceancdStrategyRollingStepsVerification Verification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName">StepsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | verification block. |

---

##### `Pause`<sup>Optional</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause"></a>

```csharp
public OceancdStrategyRollingStepsPause Pause { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `StepsName`<sup>Optional</sup> <a name="StepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName"></a>

```csharp
public string StepsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}.

---

##### `Verification`<sup>Optional</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification"></a>

```csharp
public OceancdStrategyRollingStepsVerification Verification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyRollingStepsPause <a name="OceancdStrategyRollingStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsPause {
    string Duration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyRollingStepsVerification <a name="OceancdStrategyRollingStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsVerification {
    string[] TemplateNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.180.2/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdStrategyCanaryBackgroundVerificationOutputReference <a name="OceancdStrategyCanaryBackgroundVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryBackgroundVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput"></a>

```csharp
public string[] TemplateNamesInput { get; }
```

- *Type:* string[]

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryBackgroundVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---


### OceancdStrategyCanaryOutputReference <a name="OceancdStrategyCanaryOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification">PutBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification">ResetBackgroundVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackgroundVerification` <a name="PutBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification"></a>

```csharp
private void PutBackgroundVerification(OceancdStrategyCanaryBackgroundVerification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---

##### `ResetBackgroundVerification` <a name="ResetBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification"></a>

```csharp
private void ResetBackgroundVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification">BackgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput">BackgroundVerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundVerification`<sup>Required</sup> <a name="BackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification"></a>

```csharp
public OceancdStrategyCanaryBackgroundVerificationOutputReference BackgroundVerification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps"></a>

```csharp
public OceancdStrategyCanaryStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a>

---

##### `BackgroundVerificationInput`<sup>Optional</sup> <a name="BackgroundVerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput"></a>

```csharp
public OceancdStrategyCanaryBackgroundVerification BackgroundVerificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanary InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---


### OceancdStrategyCanaryStepsList <a name="OceancdStrategyCanaryStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get"></a>

```csharp
private OceancdStrategyCanaryStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyCanaryStepsOutputReference <a name="OceancdStrategyCanaryStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause">PutPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale">PutSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute">PutSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification">PutVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause">ResetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale">ResetSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute">ResetSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight">ResetSetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName">ResetStepName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification">ResetVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPause` <a name="PutPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause"></a>

```csharp
private void PutPause(OceancdStrategyCanaryStepsPause Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `PutSetCanaryScale` <a name="PutSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale"></a>

```csharp
private void PutSetCanaryScale(OceancdStrategyCanaryStepsSetCanaryScale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `PutSetHeaderRoute` <a name="PutSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute"></a>

```csharp
private void PutSetHeaderRoute(OceancdStrategyCanaryStepsSetHeaderRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `PutVerification` <a name="PutVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification"></a>

```csharp
private void PutVerification(OceancdStrategyCanaryStepsVerification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `ResetPause` <a name="ResetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause"></a>

```csharp
private void ResetPause()
```

##### `ResetSetCanaryScale` <a name="ResetSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale"></a>

```csharp
private void ResetSetCanaryScale()
```

##### `ResetSetHeaderRoute` <a name="ResetSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute"></a>

```csharp
private void ResetSetHeaderRoute()
```

##### `ResetSetWeight` <a name="ResetSetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight"></a>

```csharp
private void ResetSetWeight()
```

##### `ResetStepName` <a name="ResetStepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName"></a>

```csharp
private void ResetStepName()
```

##### `ResetVerification` <a name="ResetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification"></a>

```csharp
private void ResetVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale">SetCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute">SetHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput">PauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput">SetCanaryScaleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput">SetHeaderRouteInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput">SetWeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput">VerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight">SetWeight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pause`<sup>Required</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause"></a>

```csharp
public OceancdStrategyCanaryStepsPauseOutputReference Pause { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a>

---

##### `SetCanaryScale`<sup>Required</sup> <a name="SetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale"></a>

```csharp
public OceancdStrategyCanaryStepsSetCanaryScaleOutputReference SetCanaryScale { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a>

---

##### `SetHeaderRoute`<sup>Required</sup> <a name="SetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteOutputReference SetHeaderRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a>

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification"></a>

```csharp
public OceancdStrategyCanaryStepsVerificationOutputReference Verification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a>

---

##### `PauseInput`<sup>Optional</sup> <a name="PauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput"></a>

```csharp
public OceancdStrategyCanaryStepsPause PauseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `SetCanaryScaleInput`<sup>Optional</sup> <a name="SetCanaryScaleInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput"></a>

```csharp
public OceancdStrategyCanaryStepsSetCanaryScale SetCanaryScaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `SetHeaderRouteInput`<sup>Optional</sup> <a name="SetHeaderRouteInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRoute SetHeaderRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `SetWeightInput`<sup>Optional</sup> <a name="SetWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput"></a>

```csharp
public double SetWeightInput { get; }
```

- *Type:* double

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput"></a>

```csharp
public string StepNameInput { get; }
```

- *Type:* string

---

##### `VerificationInput`<sup>Optional</sup> <a name="VerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput"></a>

```csharp
public OceancdStrategyCanaryStepsVerification VerificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `SetWeight`<sup>Required</sup> <a name="SetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight"></a>

```csharp
public double SetWeight { get; }
```

- *Type:* double

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyCanaryStepsPauseOutputReference <a name="OceancdStrategyCanaryStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsPauseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryStepsPause InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---


### OceancdStrategyCanaryStepsSetCanaryScaleOutputReference <a name="OceancdStrategyCanaryStepsSetCanaryScaleOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetCanaryScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight">ResetMatchTrafficWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchTrafficWeight` <a name="ResetMatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight"></a>

```csharp
private void ResetMatchTrafficWeight()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput">MatchTrafficWeightInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight">MatchTrafficWeight</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchTrafficWeightInput`<sup>Optional</sup> <a name="MatchTrafficWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput"></a>

```csharp
public object MatchTrafficWeightInput { get; }
```

- *Type:* object

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `MatchTrafficWeight`<sup>Required</sup> <a name="MatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight"></a>

```csharp
public object MatchTrafficWeight { get; }
```

- *Type:* object

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryStepsSetCanaryScale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchList <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get"></a>

```csharp
private OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue">PutHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderValue` <a name="PutHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue"></a>

```csharp
private void PutHeaderValue(OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue">HeaderValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference HeaderValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a>

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue HeaderValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyCanaryStepsSetHeaderRouteOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsSetHeaderRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput">HeaderRouteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput">MatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName">HeaderRouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRouteMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a>

---

##### `HeaderRouteNameInput`<sup>Optional</sup> <a name="HeaderRouteNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput"></a>

```csharp
public string HeaderRouteNameInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput"></a>

```csharp
public object MatchInput { get; }
```

- *Type:* object

---

##### `HeaderRouteName`<sup>Required</sup> <a name="HeaderRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName"></a>

```csharp
public string HeaderRouteName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryStepsSetHeaderRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---


### OceancdStrategyCanaryStepsVerificationOutputReference <a name="OceancdStrategyCanaryStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyCanaryStepsVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput"></a>

```csharp
public string[] TemplateNamesInput { get; }
```

- *Type:* string[]

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyCanaryStepsVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---


### OceancdStrategyRollingOutputReference <a name="OceancdStrategyRollingOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps">PutSteps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps"></a>

```csharp
public OceancdStrategyRollingStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a>

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyRolling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---


### OceancdStrategyRollingStepsList <a name="OceancdStrategyRollingStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get"></a>

```csharp
private OceancdStrategyRollingStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyRollingStepsOutputReference <a name="OceancdStrategyRollingStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause">PutPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification">PutVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause">ResetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName">ResetStepsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification">ResetVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPause` <a name="PutPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause"></a>

```csharp
private void PutPause(OceancdStrategyRollingStepsPause Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `PutVerification` <a name="PutVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification"></a>

```csharp
private void PutVerification(OceancdStrategyRollingStepsVerification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `ResetPause` <a name="ResetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause"></a>

```csharp
private void ResetPause()
```

##### `ResetStepsName` <a name="ResetStepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName"></a>

```csharp
private void ResetStepsName()
```

##### `ResetVerification` <a name="ResetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification"></a>

```csharp
private void ResetVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause">Pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification">Verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput">PauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput">StepsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput">VerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName">StepsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pause`<sup>Required</sup> <a name="Pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause"></a>

```csharp
public OceancdStrategyRollingStepsPauseOutputReference Pause { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a>

---

##### `Verification`<sup>Required</sup> <a name="Verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification"></a>

```csharp
public OceancdStrategyRollingStepsVerificationOutputReference Verification { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a>

---

##### `PauseInput`<sup>Optional</sup> <a name="PauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput"></a>

```csharp
public OceancdStrategyRollingStepsPause PauseInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `StepsNameInput`<sup>Optional</sup> <a name="StepsNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput"></a>

```csharp
public string StepsNameInput { get; }
```

- *Type:* string

---

##### `VerificationInput`<sup>Optional</sup> <a name="VerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput"></a>

```csharp
public OceancdStrategyRollingStepsVerification VerificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `StepsName`<sup>Required</sup> <a name="StepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName"></a>

```csharp
public string StepsName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OceancdStrategyRollingStepsPauseOutputReference <a name="OceancdStrategyRollingStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsPauseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyRollingStepsPause InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---


### OceancdStrategyRollingStepsVerificationOutputReference <a name="OceancdStrategyRollingStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdStrategyRollingStepsVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput">TemplateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames">TemplateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateNamesInput`<sup>Optional</sup> <a name="TemplateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput"></a>

```csharp
public string[] TemplateNamesInput { get; }
```

- *Type:* string[]

---

##### `TemplateNames`<sup>Required</sup> <a name="TemplateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames"></a>

```csharp
public string[] TemplateNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue"></a>

```csharp
public OceancdStrategyRollingStepsVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---



