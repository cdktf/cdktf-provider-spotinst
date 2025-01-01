# `credentialsGcp` Submodule <a name="`credentialsGcp` Submodule" id="@cdktf/provider-spotinst.credentialsGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CredentialsGcp <a name="CredentialsGcp" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp spotinst_credentials_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new CredentialsGcp(Construct Scope, string Id, CredentialsGcpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig">CredentialsGcpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig">CredentialsGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CredentialsGcp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

CredentialsGcp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

CredentialsGcp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

CredentialsGcp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

CredentialsGcp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CredentialsGcp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CredentialsGcp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CredentialsGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CredentialsGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrlInput">AuthProviderX509CertUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUriInput">AuthUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmailInput">ClientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrlInput">ClientX509CertUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyIdInput">PrivateKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUriInput">TokenUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrl">AuthProviderX509CertUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUri">AuthUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrl">ClientX509CertUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUri">TokenUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AuthProviderX509CertUrlInput`<sup>Optional</sup> <a name="AuthProviderX509CertUrlInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrlInput"></a>

```csharp
public string AuthProviderX509CertUrlInput { get; }
```

- *Type:* string

---

##### `AuthUriInput`<sup>Optional</sup> <a name="AuthUriInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUriInput"></a>

```csharp
public string AuthUriInput { get; }
```

- *Type:* string

---

##### `ClientEmailInput`<sup>Optional</sup> <a name="ClientEmailInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmailInput"></a>

```csharp
public string ClientEmailInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientX509CertUrlInput`<sup>Optional</sup> <a name="ClientX509CertUrlInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrlInput"></a>

```csharp
public string ClientX509CertUrlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyIdInput`<sup>Optional</sup> <a name="PrivateKeyIdInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyIdInput"></a>

```csharp
public string PrivateKeyIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TokenUriInput`<sup>Optional</sup> <a name="TokenUriInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUriInput"></a>

```csharp
public string TokenUriInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AuthProviderX509CertUrl`<sup>Required</sup> <a name="AuthProviderX509CertUrl" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authProviderX509CertUrl"></a>

```csharp
public string AuthProviderX509CertUrl { get; }
```

- *Type:* string

---

##### `AuthUri`<sup>Required</sup> <a name="AuthUri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.authUri"></a>

```csharp
public string AuthUri { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientX509CertUrl`<sup>Required</sup> <a name="ClientX509CertUrl" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.clientX509CertUrl"></a>

```csharp
public string ClientX509CertUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tokenUri"></a>

```csharp
public string TokenUri { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialsGcpConfig <a name="CredentialsGcpConfig" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Spotinst;

new CredentialsGcpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string AuthProviderX509CertUrl,
    string AuthUri,
    string ClientEmail,
    string ClientId,
    string ClientX509CertUrl,
    string PrivateKey,
    string PrivateKeyId,
    string ProjectId,
    string TokenUri,
    string Type,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authProviderX509CertUrl">AuthProviderX509CertUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authUri">AuthUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientEmail">ClientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientX509CertUrl">ClientX509CertUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKeyId">PrivateKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.tokenUri">TokenUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#type CredentialsGcp#type}. |
| <code><a href="#@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#id CredentialsGcp#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#account_id CredentialsGcp#account_id}.

---

##### `AuthProviderX509CertUrl`<sup>Required</sup> <a name="AuthProviderX509CertUrl" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authProviderX509CertUrl"></a>

```csharp
public string AuthProviderX509CertUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#auth_provider_x509_cert_url CredentialsGcp#auth_provider_x509_cert_url}.

---

##### `AuthUri`<sup>Required</sup> <a name="AuthUri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.authUri"></a>

```csharp
public string AuthUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#auth_uri CredentialsGcp#auth_uri}.

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientEmail"></a>

```csharp
public string ClientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_email CredentialsGcp#client_email}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_id CredentialsGcp#client_id}.

---

##### `ClientX509CertUrl`<sup>Required</sup> <a name="ClientX509CertUrl" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.clientX509CertUrl"></a>

```csharp
public string ClientX509CertUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#client_x509_cert_url CredentialsGcp#client_x509_cert_url}.

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#private_key CredentialsGcp#private_key}.

---

##### `PrivateKeyId`<sup>Required</sup> <a name="PrivateKeyId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.privateKeyId"></a>

```csharp
public string PrivateKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#private_key_id CredentialsGcp#private_key_id}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#project_id CredentialsGcp#project_id}.

---

##### `TokenUri`<sup>Required</sup> <a name="TokenUri" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.tokenUri"></a>

```csharp
public string TokenUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#token_uri CredentialsGcp#token_uri}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#type CredentialsGcp#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.credentialsGcp.CredentialsGcpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.203.0/docs/resources/credentials_gcp#id CredentialsGcp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



