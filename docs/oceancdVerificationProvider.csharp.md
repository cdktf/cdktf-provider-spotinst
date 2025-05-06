# `oceancdVerificationProvider` Submodule <a name="`oceancdVerificationProvider` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationProvider <a name="OceancdVerificationProvider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProvider(Construct Scope, string Id, OceancdVerificationProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch">PutCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins">PutJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic">PutNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus">PutPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch">ResetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins">ResetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic">ResetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus">ResetPrometheus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudWatch` <a name="PutCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch"></a>

```csharp
private void PutCloudWatch(OceancdVerificationProviderCloudWatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `PutDatadog` <a name="PutDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog"></a>

```csharp
private void PutDatadog(OceancdVerificationProviderDatadog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `PutJenkins` <a name="PutJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins"></a>

```csharp
private void PutJenkins(OceancdVerificationProviderJenkins Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `PutNewRelic` <a name="PutNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic"></a>

```csharp
private void PutNewRelic(OceancdVerificationProviderNewRelic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus"></a>

```csharp
private void PutPrometheus(OceancdVerificationProviderPrometheus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `ResetCloudWatch` <a name="ResetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch"></a>

```csharp
private void ResetCloudWatch()
```

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog"></a>

```csharp
private void ResetDatadog()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJenkins` <a name="ResetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins"></a>

```csharp
private void ResetJenkins()
```

##### `ResetNewRelic` <a name="ResetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic"></a>

```csharp
private void ResetNewRelic()
```

##### `ResetPrometheus` <a name="ResetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus"></a>

```csharp
private void ResetPrometheus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdVerificationProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdVerificationProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdVerificationProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

OceancdVerificationProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdVerificationProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdVerificationProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput">CloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput">ClusterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput">DatadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput">JenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput">NewRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds">ClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudWatch`<sup>Required</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch"></a>

```csharp
public OceancdVerificationProviderCloudWatchOutputReference CloudWatch { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog"></a>

```csharp
public OceancdVerificationProviderDatadogOutputReference Datadog { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a>

---

##### `Jenkins`<sup>Required</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins"></a>

```csharp
public OceancdVerificationProviderJenkinsOutputReference Jenkins { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a>

---

##### `NewRelic`<sup>Required</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic"></a>

```csharp
public OceancdVerificationProviderNewRelicOutputReference NewRelic { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a>

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus"></a>

```csharp
public OceancdVerificationProviderPrometheusOutputReference Prometheus { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a>

---

##### `CloudWatchInput`<sup>Optional</sup> <a name="CloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput"></a>

```csharp
public OceancdVerificationProviderCloudWatch CloudWatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `ClusterIdsInput`<sup>Optional</sup> <a name="ClusterIdsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput"></a>

```csharp
public string[] ClusterIdsInput { get; }
```

- *Type:* string[]

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput"></a>

```csharp
public OceancdVerificationProviderDatadog DatadogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JenkinsInput`<sup>Optional</sup> <a name="JenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput"></a>

```csharp
public OceancdVerificationProviderJenkins JenkinsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewRelicInput`<sup>Optional</sup> <a name="NewRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput"></a>

```csharp
public OceancdVerificationProviderNewRelic NewRelicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput"></a>

```csharp
public OceancdVerificationProviderPrometheus PrometheusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds"></a>

```csharp
public string[] ClusterIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationProviderCloudWatch <a name="OceancdVerificationProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderCloudWatch {
    string IamArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn">IamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}. |

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn"></a>

```csharp
public string IamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}.

---

### OceancdVerificationProviderConfig <a name="OceancdVerificationProviderConfig" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ClusterIds,
    string Name,
    OceancdVerificationProviderCloudWatch CloudWatch = null,
    OceancdVerificationProviderDatadog Datadog = null,
    string Id = null,
    OceancdVerificationProviderJenkins Jenkins = null,
    OceancdVerificationProviderNewRelic NewRelic = null,
    OceancdVerificationProviderPrometheus Prometheus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds">ClusterIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | prometheus block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds"></a>

```csharp
public string[] ClusterIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}.

---

##### `CloudWatch`<sup>Optional</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch"></a>

```csharp
public OceancdVerificationProviderCloudWatch CloudWatch { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog"></a>

```csharp
public OceancdVerificationProviderDatadog Datadog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jenkins`<sup>Optional</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins"></a>

```csharp
public OceancdVerificationProviderJenkins Jenkins { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}

---

##### `NewRelic`<sup>Optional</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic"></a>

```csharp
public OceancdVerificationProviderNewRelic NewRelic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus"></a>

```csharp
public OceancdVerificationProviderPrometheus Prometheus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}

---

### OceancdVerificationProviderDatadog <a name="OceancdVerificationProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderDatadog {
    string Address,
    string ApiKey,
    string AppKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey">ApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey">AppKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}.

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey"></a>

```csharp
public string AppKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}.

---

### OceancdVerificationProviderJenkins <a name="OceancdVerificationProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderJenkins {
    string ApiToken,
    string BaseUrl,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken">ApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}. |

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}.

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}.

---

### OceancdVerificationProviderNewRelic <a name="OceancdVerificationProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderNewRelic {
    string AccountId,
    string PersonalApiKey,
    string BaseUrlNerdGraph = null,
    string BaseUrlRest = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey">PersonalApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph">BaseUrlNerdGraph</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest">BaseUrlRest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}.

---

##### `PersonalApiKey`<sup>Required</sup> <a name="PersonalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey"></a>

```csharp
public string PersonalApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}.

---

##### `BaseUrlNerdGraph`<sup>Optional</sup> <a name="BaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph"></a>

```csharp
public string BaseUrlNerdGraph { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}.

---

##### `BaseUrlRest`<sup>Optional</sup> <a name="BaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest"></a>

```csharp
public string BaseUrlRest { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}.

---

### OceancdVerificationProviderPrometheus <a name="OceancdVerificationProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderPrometheus {
    string Address
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.218.1/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationProviderCloudWatchOutputReference <a name="OceancdVerificationProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderCloudWatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput">IamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn">IamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamArnInput`<sup>Optional</sup> <a name="IamArnInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput"></a>

```csharp
public string IamArnInput { get; }
```

- *Type:* string

---

##### `IamArn`<sup>Required</sup> <a name="IamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn"></a>

```csharp
public string IamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue"></a>

```csharp
public OceancdVerificationProviderCloudWatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---


### OceancdVerificationProviderDatadogOutputReference <a name="OceancdVerificationProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderDatadogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput">AppKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey">AppKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `AppKeyInput`<sup>Optional</sup> <a name="AppKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput"></a>

```csharp
public string AppKeyInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `AppKey`<sup>Required</sup> <a name="AppKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey"></a>

```csharp
public string AppKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue"></a>

```csharp
public OceancdVerificationProviderDatadog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---


### OceancdVerificationProviderJenkinsOutputReference <a name="OceancdVerificationProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderJenkinsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue"></a>

```csharp
public OceancdVerificationProviderJenkins InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---


### OceancdVerificationProviderNewRelicOutputReference <a name="OceancdVerificationProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderNewRelicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph">ResetBaseUrlNerdGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest">ResetBaseUrlRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrlNerdGraph` <a name="ResetBaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph"></a>

```csharp
private void ResetBaseUrlNerdGraph()
```

##### `ResetBaseUrlRest` <a name="ResetBaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest"></a>

```csharp
private void ResetBaseUrlRest()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput">BaseUrlNerdGraphInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput">BaseUrlRestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput">PersonalApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph">BaseUrlNerdGraph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest">BaseUrlRest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey">PersonalApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BaseUrlNerdGraphInput`<sup>Optional</sup> <a name="BaseUrlNerdGraphInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput"></a>

```csharp
public string BaseUrlNerdGraphInput { get; }
```

- *Type:* string

---

##### `BaseUrlRestInput`<sup>Optional</sup> <a name="BaseUrlRestInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput"></a>

```csharp
public string BaseUrlRestInput { get; }
```

- *Type:* string

---

##### `PersonalApiKeyInput`<sup>Optional</sup> <a name="PersonalApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput"></a>

```csharp
public string PersonalApiKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BaseUrlNerdGraph`<sup>Required</sup> <a name="BaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph"></a>

```csharp
public string BaseUrlNerdGraph { get; }
```

- *Type:* string

---

##### `BaseUrlRest`<sup>Required</sup> <a name="BaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest"></a>

```csharp
public string BaseUrlRest { get; }
```

- *Type:* string

---

##### `PersonalApiKey`<sup>Required</sup> <a name="PersonalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey"></a>

```csharp
public string PersonalApiKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue"></a>

```csharp
public OceancdVerificationProviderNewRelic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---


### OceancdVerificationProviderPrometheusOutputReference <a name="OceancdVerificationProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new OceancdVerificationProviderPrometheusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue"></a>

```csharp
public OceancdVerificationProviderPrometheus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---



