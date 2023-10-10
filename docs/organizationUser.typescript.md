# `spotinst_organization_user`

Refer to the Terraform Registory for docs: [`spotinst_organization_user`](https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user).

# `organizationUser` Submodule <a name="`organizationUser` Submodule" id="@cdktf/provider-spotinst.organizationUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationUser <a name="OrganizationUser" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user spotinst_organization_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

new organizationUser.OrganizationUser(scope: Construct, id: string, config: OrganizationUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig">OrganizationUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig">OrganizationUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | OrganizationUserPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.putPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.resetUserGroupIds"></a>

```typescript
public resetUserGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

organizationUser.OrganizationUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

organizationUser.OrganizationUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

organizationUser.OrganizationUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList">OrganizationUserPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policiesInput">policiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policies"></a>

```typescript
public readonly policies: OrganizationUserPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList">OrganizationUserPoliciesList</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | OrganizationUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIdsInput"></a>

```typescript
public readonly userGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.organizationUser.OrganizationUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationUserConfig <a name="OrganizationUserConfig" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.Initializer"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

const organizationUserConfig: organizationUser.OrganizationUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#email OrganizationUser#email}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#first_name OrganizationUser#first_name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#last_name OrganizationUser#last_name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#id OrganizationUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#password OrganizationUser#password}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.policies">policies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#role OrganizationUser#role}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#user_group_ids OrganizationUser#user_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#email OrganizationUser#email}.

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#first_name OrganizationUser#first_name}.

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#last_name OrganizationUser#last_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#id OrganizationUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#password OrganizationUser#password}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | OrganizationUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policies OrganizationUser#policies}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#role OrganizationUser#role}.

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserConfig.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#user_group_ids OrganizationUser#user_group_ids}.

---

### OrganizationUserPolicies <a name="OrganizationUserPolicies" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.Initializer"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

const organizationUserPolicies: organizationUser.OrganizationUserPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyAccountIds">policyAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_account_ids OrganizationUser#policy_account_ids}. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_id OrganizationUser#policy_id}. |

---

##### `policyAccountIds`<sup>Required</sup> <a name="policyAccountIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyAccountIds"></a>

```typescript
public readonly policyAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_account_ids OrganizationUser#policy_account_ids}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.144.0/docs/resources/organization_user#policy_id OrganizationUser#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationUserPoliciesList <a name="OrganizationUserPoliciesList" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

new organizationUser.OrganizationUserPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get"></a>

```typescript
public get(index: number): OrganizationUserPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>[]

---


### OrganizationUserPoliciesOutputReference <a name="OrganizationUserPoliciesOutputReference" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer"></a>

```typescript
import { organizationUser } from '@cdktf/provider-spotinst'

new organizationUser.OrganizationUserPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIdsInput">policyAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIds">policyAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyAccountIdsInput`<sup>Optional</sup> <a name="policyAccountIdsInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIdsInput"></a>

```typescript
public readonly policyAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `policyAccountIds`<sup>Required</sup> <a name="policyAccountIds" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyAccountIds"></a>

```typescript
public readonly policyAccountIds: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationUser.OrganizationUserPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationUserPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationUser.OrganizationUserPolicies">OrganizationUserPolicies</a>

---



